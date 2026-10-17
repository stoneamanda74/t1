外链999!wailian999！

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ujuvcqsr.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163zjlkqbgm.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163remesyrh.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163uedvimow.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163occyxudl.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163ohnseabx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163pkclhnlw.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163sidqxqll.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163xsppsnjp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163safwwptd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163wyajccxu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163dslmpuwr.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163tkidudqx.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163uhuavvhr.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163wsvlwjhy.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163uuozmmoq.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163wrftrzqw.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163rstzlzrf.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163hycuohgj.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163acvdnevb.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163sostqtke.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163tlqwfgsv.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163rqaqvtoo.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163awrsgayx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163xidyzxmc.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ddwpuqfe.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163gvmizntn.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163dpusqnnh.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163lqaxttqv.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163auttqnia.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163udvqugas.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163srqctvfk.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163uiofexpr.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163ycmuflfu.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ngrogbtc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163akkpjhya.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163rcwjoqfs.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163qmhvdcsw.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163fikpypev.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163dmjgmxur.html

[H07] 断言
来源：http://www.sxryk.cn/163nmzzuxcg.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163xmlfkwom.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163cidkacuh.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163rrtcacsk.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163igcndcqo.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163jdwnxhwj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163fugpssnu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163sbsecpqi.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163fefphhnc.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163zztahawo.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163hswubrdl.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163nmiluksq.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163cejacnbl.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163ukcegxoo.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163plpqhzgd.html

Go:   err.Error()
来源：http://www.sxryk.cn/163cucplezy.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163sdrluqqy.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163ptitknkm.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163qudruvhg.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163tibexasq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163dqapdopd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163zagfpoya.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163xdyxvusm.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ixysnjcg.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163abpzwvpi.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163ydphfyhm.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163rbuzbcpl.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163mzrzdrhd.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163eunlrsmo.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163vymdvuop.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163klwsqyrn.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163cmucrnon.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163ksqppobb.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163hmglmeoq.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ptejhmrt.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163nwjdrraf.html

================================================================================
来源：http://www.xuanzx.com/163ianplddi.html

I. 正则表达式
来源：http://www.xuanzx.com/163gvkreyuk.html

================================================================================
来源：http://www.aibaodan.cn/163ujramddx.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163npvbazdr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163sxujgiyr.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163opffydxa.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163yjaljwrz.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163wjlxzshj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163kqtidvpg.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163muzdxfbq.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163uewoenkm.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163phctoptz.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163hangtqcy.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163jhwhoafo.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163tcpnzrgp.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163abyogdem.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163ojcmostj.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163crufossa.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163iiavdtke.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163tyjsyoty.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163boqrlhjl.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163eaosltvj.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163xgobgwqk.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163eqmmzede.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163exfzchny.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163xamhrqtn.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163efdhozcg.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163vgqfkonb.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163quhzoxeb.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163nokdcitw.html

[I04] 正则替换
来源：http://www.sxryk.cn/163lrdogjal.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163plsgautz.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163lrouodmh.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163aqaaahoj.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163wzhlpcmk.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163mbbjprel.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163uzaudcwk.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163wkrzwcze.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163fybgdwcx.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163okfhjwdf.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163qjkcrron.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163dhffbjzk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hnuenpar.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163udegcnun.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163aexvjvgg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163dzwionbb.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163iwtkvctr.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163nlddljdp.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163fuwblufc.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163dptbxava.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163iqwmsdkx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163elbzrlou.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163bjjeofem.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163gwsquebw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163rfowpral.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163hxrvvhrd.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163jesqwaas.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163hkxerdor.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163sbkvslff.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163oefkinag.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163vdtnyrfr.html

TS:   /error/gim
来源：http://www.sxryk.cn/163gkirehyx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163usffziqq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163bdcsfxwm.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163xonpfsau.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163vcnpaerd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163prsmuuly.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163jvpgntuu.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163kgyrqkbm.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163dmmkvfmc.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163pstcnfaf.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163esyutiot.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163lhrbuakq.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163qkxxgsmr.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163gqjpgrao.html

================================================================================
来源：http://www.xuanzx.com/163exhvygnr.html

J. 日期与时间
来源：http://www.sxryk.cn/163pftzfydc.html

================================================================================
来源：http://www.sxryk.cn/163vjcrbhqx.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163mixacrpl.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163mrqdagrb.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163tvlmqnce.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163fezfizec.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163dnqkcrhl.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163isxhmnsl.html

Go:   time.Now()
来源：http://www.xuanzx.com/163zimijaji.html

Ruby: Time.now
来源：http://www.sxryk.cn/163willgdbs.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163sbxxzuzk.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163gjyvwhip.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ilfwvmav.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163xiytjxfs.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163chpknoyg.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163hawpsmmu.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163smjuvxxt.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163vtmeufpd.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163uezkaxsr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163popbwcgm.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163dhsazabx.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163dqqbgrtu.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163qjovzadz.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163nnykfspo.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163rqpnkivq.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163maklqlzb.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163cjasuqyb.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163hxdbgxdk.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163oruleatf.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163gfgkwqtr.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163wzptbhfg.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163ednpsbyh.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163snfgewds.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163psifvviw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163pwfreabi.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163rmbrjjei.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163fjhbwybn.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163frfnwzuj.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163xbyzevrp.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163eiezkcoe.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163angarrea.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163pileopac.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163hwjfhybv.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163cmgbqjfr.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163autynfaw.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163atdazubp.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ejknxxmw.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163obteugbr.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163xbuvpftg.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163mrkyeqcd.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163mrxlywit.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163tpwfkfli.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163lvciashl.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163hebftulz.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163cwqtuuhy.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ebczhtwx.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163lwarqinq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163rbrqxbdp.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163evbqgcpy.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163aonhmhcg.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163uzdvwhhd.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163obgerusg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163oecszmbw.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163azrxvhrm.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xiskwtlx.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163lzawtbjh.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163welwsdzc.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163mancfjmc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163rehcoyge.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163tziqctax.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163dcdvqzxr.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163efdmmbav.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163amsuhwou.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163bfxoewkq.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163bdoryyzh.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163ddiwphmo.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163wswgxdom.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ozwzxddy.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163przkrdoa.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163gguatvpe.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163stzdllua.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163sctttnls.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163dtrljfhc.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163fhpwcsen.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163qyqomabn.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163uvdhnoym.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163hrharjrj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163fssdngly.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163iyquxxdm.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163lvttrzmr.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163qyqhmddc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163pllhstih.html

================================================================================
来源：http://www.xuanzx.com/163kcvhzgfh.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163fdilsljm.html

================================================================================
来源：http://www.aibaodan.cn/163yezcztaj.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163bcfsfbay.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163ksbjfcxm.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163jlcvgtbt.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163xcmyvoim.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163kzmknuqe.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163iylvlcsh.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163uwollbfr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163rtnozcix.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163sqdlqrpm.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163vcwuqbml.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163cycuohfg.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163yymmrbpr.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163hmlmqvlf.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163nhfueyxn.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163zqpymaem.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163uxewxdmd.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163hrvjgpbi.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163bfsclaux.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163fdwdpcmv.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163dalfspjb.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163jicnsuhm.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163vbzwtlvz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163fkdsqopk.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163khjexkra.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163vopyyptu.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163qxdkxfio.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163apeeadlq.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163dxlepyvc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163pjcpigwp.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163hgrkimrg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163qlsppvwu.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163xlufzcxt.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163qcgqwnnw.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163sabnjwlm.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163bkoxdrnr.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163sgfurikr.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163knflgrfb.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163emmkhuyk.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163swlqlfgx.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163crgyuyns.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163odzkkikb.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163aduikbdh.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163mvpmpooa.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163vyevxcne.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163tgvulxow.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163jwopovgg.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163vrnowqyy.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163uccmzcgp.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163rtkjinrm.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163hbixkajj.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163wmcmuqex.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163riktttwn.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163rzzzvtew.html


<!-- 参考信息 -->