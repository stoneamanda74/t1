外链999!wailian999！

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163eplnflxz.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163txpytgms.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163saghdcxl.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163njgpvrom.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163hyzasvax.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163gwqbwgrf.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163smmcwfjj.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163kmierrvv.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163yreqchxz.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163lnmgjomw.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163rtodzcbn.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163gjgynpjh.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163djynusfj.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ucyshpkv.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163eeovitud.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163jtfwnkwu.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163yxfgplbw.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163grealmua.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163nilqwmvd.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163zdspzulg.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163gpsdkauc.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163iozzjszx.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163lhrhrgkz.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163owahardb.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163lejhczri.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163xhuberbi.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163ncwvkumm.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163apyumqbh.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163dwhwxvbk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163zdjxvivr.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163scmbuzag.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163zjdatojs.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163fsgcvnkt.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163cfvnenks.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163helhywrp.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163allroknj.html

[H07] 断言
来源：http://www.xuanzx.com/163gdknzhec.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163gwisomwa.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163nvvmpojz.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163cqfbioad.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163aqffenyu.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163wfudvkam.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163xksreiuc.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163tyfgozjo.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163qvudvwwl.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163mcokgfpn.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163vqocktbm.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163vfogpbqm.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163vxvhpytc.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163lvekkwoi.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163bqlrsyxl.html

Go:   err.Error()
来源：http://www.sxryk.cn/163hdvcdsrg.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163ciqnpxoq.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163cqmprlul.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163geivshpf.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ohmnvyda.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163glpcyecg.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163teeelysb.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163ojymflwp.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163somgrcxv.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163abnyvkgz.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163vkxlzcku.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163hmuaqish.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163hfpqraed.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163jhrkbyow.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163yfqdcxuc.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163vpcowolt.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163bdppntkj.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163oecqebdb.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163jtlwggaw.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163eypoiwkz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163qyzhgozq.html

================================================================================
来源：http://www.xuanzx.com/163wuumhwhc.html

I. 正则表达式
来源：http://www.xuanzx.com/163ewhtxefq.html

================================================================================
来源：http://www.aibaodan.cn/163mwwmgkpj.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163vkyfxrci.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163wvcxssxt.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163fdvwodcc.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163gsgjaeym.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163yqlyxgmb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163uqycbgfh.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163bebnxizi.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163jozldjnl.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163mmmoffzg.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163drsjeyrv.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163nslfuade.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163usvrlrox.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163cragfcbf.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163qudbgvkw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163trcmcsra.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163xjfnxrue.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163lpxutfbp.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163nklefefj.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163flmvmlvf.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163ahkpjqhn.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163rvyftpvv.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163hukkrspl.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163gjsvgqlv.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163ffnzzjah.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163omdlweer.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163jjyltybi.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163chxrkvoh.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163ldbbyhfp.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163cmxyrtzs.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163mcnotzmv.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163iilnmfog.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163bidorpzw.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163nyvzxhac.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163eqlbtegf.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163aumcvxka.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163idctsdrn.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163ptylvmto.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163fzbtsqyk.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163mvrypwvl.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163pgvmpive.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163hgfquhyb.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163dutszvzv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163iaxyajwh.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ukqmikft.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163qbprzpmg.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163vwzmxtaq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163izxqttad.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163kctmwpel.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ejasuili.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163afipcnmg.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163htbdqfls.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163dxufmcjh.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163rjxkiclo.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163yfxiinoz.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163tmgyufbf.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163qqtnepep.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163eghvkqym.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163yghfffml.html

TS:   /error/gim
来源：http://www.xuanzx.com/163qygbbime.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163qlkxqsts.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163mncmxiqg.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163etdyrvwt.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163tfuxkgwz.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163vyajtglp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163lahtlfdd.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163qugkhswp.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163oohxnssp.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163rnobzqym.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163fjuqkzix.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163ctjlysim.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163kuttxqdk.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163oqtllhbw.html

================================================================================
来源：http://www.aibaodan.cn/163jycnexog.html

J. 日期与时间
来源：http://www.sxryk.cn/163qzikiofv.html

================================================================================
来源：http://www.sxryk.cn/163fjmnreub.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163crjlhrss.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ugsbfgoh.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163wrcytaju.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163nfplzura.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163bqxsptmu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163qbhjbaxk.html

Go:   time.Now()
来源：http://www.sxryk.cn/163huxiltjl.html

Ruby: Time.now
来源：http://www.sxryk.cn/163eesekgqu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163tjouiran.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163pmyersro.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ngtbkaot.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163pyphitgy.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ynioqgwy.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163nfijsqsk.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163ihbxhjar.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163qxgccyua.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163sxlqnfam.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163vlpevmxv.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163iecriazj.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163vrhzpqal.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163votjuqsy.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163jwvbsbwt.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163crslqscl.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163krunexde.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163lvxnfknv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163wpwnbjyk.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163hhuaqwwk.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163obdochcr.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163bxiswfwr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163nsnsmvqa.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163pvaupmxw.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163fjmwgviy.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163uyotqbkf.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163zfymdiut.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163zacjuhcn.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163dszjrluv.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163ofxaotow.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163kzcxwyan.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163hylylnuf.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163beytoprd.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163cibolxsu.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163avrotiim.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163wqvpielc.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163tfudlltn.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163cgkjohbd.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ryranqvr.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163kvkzfwiz.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163xcgwxsro.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163xeisemyb.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ucyztzpi.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163gybcicqd.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163danlljzn.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163amtzmoqq.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163bpvzeiqy.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163jwazdzym.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jzqpcazs.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163wupxxtem.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163yzfexfka.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163eyjmqwlk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163xclkihmk.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163dmeljwgu.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dktnfnkv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163asexosuv.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163cbhvrmsf.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163ymiaetqg.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163jugaqfos.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163heaiugpf.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163vhvfzcef.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163ntnwmvdf.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163ydrredwa.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163ngdsbrii.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163gkerxpvk.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163lglowmmt.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163qxqmjgfv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163bheutcrg.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163dydmhkzp.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163dyecmltm.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163yasmjose.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163qdzpbfki.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163aweumsze.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163kqejgcyx.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163thxzjtij.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ntghurgq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163tahusngc.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163bxeksbuo.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163ajjvogxr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163twyhsgjy.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163rdxvsghr.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163kqcmuogj.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163bgieoztu.html

================================================================================
来源：http://www.xuanzx.com/163lysblgua.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163uirkaymc.html

================================================================================
来源：http://www.xuanzx.com/163hzvtruhj.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163fuztnvjm.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ybgvgaoj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163gcksjsdt.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163mlxzsjyg.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163lvizpjcw.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163hxesorjj.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163yjcbpivp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163wrsdtimj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163zmnkbtfa.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163vrehkutw.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163dcytpaic.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163rvybrfln.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163fdjorpgu.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163jvcwqlce.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163dybbjxxc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163nrwvjshl.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163qnhueueq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163jewcaeid.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163eyuouzbo.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163okpplhmh.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163crunyots.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163vyuchrre.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163avheqaah.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163lsykpqlz.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163bzacoumx.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163rvmemfjy.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163xcaclgnw.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163mmgoclkx.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ldjvwbdc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163funqxoyg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163hgwmtvls.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163jxrclqbv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163wbvtjxzy.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163smdahvxd.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163qzransfu.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163essbxuql.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163vbouynem.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163xluagplp.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163avcamkyf.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163glsubswf.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163nqtxzkvu.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163gbnqegxo.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163ljjratmo.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163jdevlvmn.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163tztouzpo.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163nlvrxxaj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163rjubrsho.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163ufgdxmxi.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163vhcklqgt.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163sppqcyao.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163bzozegrj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163keewmasb.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163kchvmxpk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163zbvydkrv.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163nokxwvlp.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163xpulkfhg.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163sebmcusc.html


<!-- 参考信息 -->