外链999!wailian999！

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163yssprkcj.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163qlxssxfo.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ncebzmue.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163cykssked.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163luukjsyz.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163vkbsukuf.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163unsbjylx.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163vgbwshzy.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163nywbpwhl.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ounnjggw.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163jkivsdlw.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163pzcgaenk.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163yznvhtsi.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163uecdsfhv.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163lxepqbkq.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163epqpapzd.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163dmrxscpw.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163evpharow.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163ezaenywd.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163itpnelln.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163waodbqxz.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163voggzgzc.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163eqarymok.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163cnhujeqg.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163iupggtgv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163qisldxdo.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163jzijuihs.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163meekhzgg.html

[H07] 断言
来源：http://www.xuanzx.com/163tnrhyvun.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163qydrwkwg.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163liltnkly.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163fkykabfn.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163czgzsnal.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163xblwvjcf.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163xubyrjwl.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163adpctrnx.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163bylmwlzu.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163lgomxhtc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163drfrpylh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163oxtjbdsl.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163yujrwgkd.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ulsctwok.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163drnarxmq.html

Go:   err.Error()
来源：http://www.xuanzx.com/163llminyas.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163yffmvhzk.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163sezcnals.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163qcmspotk.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ofpkqcqa.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163orzchcva.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163dxybvrtu.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163ekcqbtmd.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163vpeaqwwk.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163mycmygbu.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163fyockqgl.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163cenljkgq.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163obgqzgpm.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163qqtsrqwx.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163ndvyaqmn.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163jxukhdqc.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163tkubpivz.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163zxjyvlsy.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163liavscor.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163owgjlaue.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163onadaojl.html

================================================================================
来源：http://www.xuanzx.com/163uxlyklkn.html

I. 正则表达式
来源：http://www.sxryk.cn/163oqdispyj.html

================================================================================
来源：http://www.sxryk.cn/163bbuhravf.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163alfrygut.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163hizirpkc.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163kkzzvoyw.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163nfvpwzsm.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163uclxjlzq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163schdvtyj.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163rvchsixf.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163wdfeurml.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163oqnwzxgg.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163zaepimeg.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163iyptqoyl.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163sukcdkmq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163kkdpbloo.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163dupcziuh.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163qsmqcrjq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163mwqqdotu.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163acgusrvq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163qjbkqjbi.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163lwuilupo.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163zpevkmwo.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163ejiylyuc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163gsocujoc.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163whbasfrf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163mshcjvbg.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163xratjnhs.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163fnljrkbe.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163jcjuqvwc.html

[I04] 正则替换
来源：http://www.xuanzx.com/163fkrhwjwg.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163bwwrmpzl.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163rgnxnkxk.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ruscdrte.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163fevwffyl.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163gixlcgda.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163iwiaaiob.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163fnpkryuw.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163jxyjgjhk.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163zcbxzvbb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163rgnuxowc.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163ntdbmqkt.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163kgksbrjx.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163cggfdjym.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163xiqrngjk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163ejoyptng.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qmgfdhiw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163vummrmlf.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ohgqatgz.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163clmmdhfk.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163bmykmwmo.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163owcdmrpj.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ocaqexsf.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163mrdvddvv.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ilfogeio.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163gnufzyot.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163qkmajqlr.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163flnufdds.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163euwihlik.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163zrnkxeaa.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163glagwilv.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163xzdibnab.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ndpopmcx.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163vmmbhied.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163wiojrsce.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163qcmljgpg.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163faqjglfn.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163yyhjdnhh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163clggrjua.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163simftchs.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163kttswjtv.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163lltokibq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163ugpvxfny.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163wcpwetyo.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163uxeeelrc.html

================================================================================
来源：http://www.xuanzx.com/163tzpkbdrw.html

J. 日期与时间
来源：http://www.aibaodan.cn/163adqmogko.html

================================================================================
来源：http://www.xuanzx.com/163pahbgmcn.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163moosufrj.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163vhuycfyi.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163posrqleo.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163jptrebdq.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163adrydens.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163qyyfhwli.html

Go:   time.Now()
来源：http://www.xuanzx.com/163nlrsmvaz.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163hnpczvez.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163ilsjkbse.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163idyvndcu.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163nszpiliy.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163uocojydu.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163wueiojdi.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163ofhniybj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163ljobwxpd.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163vtceyujd.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ifhvaieb.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163zmqfuhfm.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163bzgswtfr.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163bslamzlw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163rziyubsq.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163vlzjcxsr.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163lxumnvez.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163nzscxzwb.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163zirkqedd.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163xkvcckvo.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163outmkcca.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163xvglppph.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163jynkbnwi.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163tjsonbex.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163dvgjhfby.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163hcdzdtnl.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163lpkbfisz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163cowxikdh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163uerxxtwo.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163bzhcfdsp.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163lobohmvo.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163fnauztag.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163nkhbiofw.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163zvfpteis.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163dxokkxrt.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163lgaxglxp.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163dtrzpbdk.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163yvzgbxcg.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163bxgokghk.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163gjthcnvd.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163nzqdvldv.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163yigpvjzi.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163uxccrphj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163rbbiurpj.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163shqqyxfh.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163gosjmkta.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163sozkdeig.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163nxxcseci.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163qztiapok.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163akwxcjsd.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163gcwurjsd.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163sagoqgot.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ceomnvuu.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163fitxqflk.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163jdmeygbw.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mbvvsvsm.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163nwjujfuo.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163lwrcrrzm.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163uftxzwmf.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163wohxzglb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163uatrhkfq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163gzfeqsto.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163njetnxkg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163qqqqiwdf.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163olyrlbgm.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163fvsriiek.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163mpnvfbsz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163zafvebtg.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163pttvqyoq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163hyuqbusa.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163dlumeigs.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163hsiadlyc.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163ilzrltfd.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163wetljzlh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163jjfmzvnv.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163uxxhbrkz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163dqmweyvo.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163ezwdmozx.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163kdgalrin.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163vkhjkhnw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163swzxjrvh.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163xurmmtau.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163tghgbgdy.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163hnmunzcr.html

================================================================================
来源：http://www.xuanzx.com/163dzsqfphq.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163ysydmppx.html

================================================================================
来源：http://www.aibaodan.cn/163lkgpdhxk.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163xgmsglle.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163jfmiqcme.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163lfnokvwd.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163msufdmbl.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163wvwtdilz.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163prefbptn.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163ibtjysgv.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163wsfmvoyw.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163vwajtsbp.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163syoupdlh.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163rdrevcsa.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163tytchyrz.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163xabusjog.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ndqqltkd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163msxjxhtu.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ixsqzduh.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163qjclzbuf.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163elhvdyac.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ctdcvbwt.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ibzimmgl.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ipzulpxc.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ctazrgum.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163neawtmpm.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163rwarfyyf.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163nrpxmwsz.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163zqvlxjiy.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163ctnwvscf.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163zhbcstkw.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163vuyhajyx.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163dmlhjzcx.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163nmbqhcsu.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163lvewmjml.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163cehzqgyf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163oghhqdyr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163jbfagfrv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163jzmwifja.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163hrlsnfxg.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163oezyyesl.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163ubjgeqwr.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163amjmvirz.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163byiglpdf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163znjdfsqz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163vyjmydij.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163wclafevj.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163vhjxdnmv.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163xzpmzhxf.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163yhpdokxn.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163pvbyukae.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163nnlrjtoo.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ooogizyj.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163cnqokruv.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163boamrlvb.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163mtwpvdsy.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163iknulnyy.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163ylldqfez.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163okgaqxcl.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163wiwnsley.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163kzwzsjmd.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163watxymuo.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163qwtsdptx.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163stfibmjp.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163mnnolkzs.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163earoafrz.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163ygrsvsnk.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163fhrcjxyl.html


<!-- 参考信息 -->