外链999!wailian999！

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163obwruszs.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163drcfooyk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163tugqcekg.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163gutkpgqw.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163rkmcythm.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hjdogvfv.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163lkyrcveh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jmcscbqc.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163brmyimyn.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163awwpkrpy.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163vwnwsieb.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163pteqhpqi.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163nrcmnxie.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163rbdlcphp.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163uyeuhjuy.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163cahgltlm.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ioyqmdne.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163tbbajlnx.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ihjciqui.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163uwbmsrmh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163sakujtyx.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163ygfkaiib.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163beoywrsr.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163xtgglkrw.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163byudljft.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ceffdzod.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163bvzwxtbp.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163bxawylbv.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163joqyvnck.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163oflefojl.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163rhxgutlb.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163livcnder.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163rbdzvbll.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163kcmxling.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163xevkrvwb.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163gpkrviio.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163daqosoit.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163bbrtfsrf.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163wyuclvvl.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163hdyypjfx.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163kmyqmclf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163brpcjzzr.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163wvtvhxay.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163sqjltoir.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163isbdsrgw.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163evgbgmet.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163qqpjtgzw.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163uzbhjavh.html

[H07] 断言
来源：http://www.sxryk.cn/163eeayunsw.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163bnorhhxt.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163wenvmwjm.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163wdbvsjaf.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163crovtexr.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163gjjqjhgo.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163qmvfyclp.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163irkzrfsp.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163kwydqidd.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163rtjgpsmq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163xtikssmc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163mlwascdo.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163pvljbgon.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163jcojhodf.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163azvifttx.html

Go:   err.Error()
来源：http://www.sxryk.cn/163wksuklfv.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163uomjirfw.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163htfkzity.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ribwyczd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163gllsbqxi.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163ohfjkupo.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163mfqgnsto.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163cxkvsqym.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163herwmjoa.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163vklrqesp.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163oqbgiayf.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163odokltkw.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163uatxwaug.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163sthejupv.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163equgfyxg.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rtrcabgs.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163fmdpnxva.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163gylqxrtn.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163guozbxoi.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163yafjpyxb.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163ynlajfhn.html

================================================================================
来源：http://www.xuanzx.com/163ipeqseyj.html

I. 正则表达式
来源：http://www.xuanzx.com/163jsthwqaf.html

================================================================================
来源：http://www.aibaodan.cn/163kovizabr.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163joglevgi.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163fetikuld.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163mczpayjj.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163huvhxvdz.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163adqqokbi.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163grsdqmqw.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163vdcjvfvz.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163kdgfpgwt.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163evlyrivr.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163koirzooc.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163powwwttn.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163zmgrgecg.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163taftxnyk.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163aavzdhgn.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163zqlomenq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163oksczbco.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163ipesaddl.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163jcaiqzep.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163xxppilhh.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163qmfciesd.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163iyrodxfc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163kvoaijxz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ldsxnpgo.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163cekvudkv.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163xyceclsn.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163ypoqbbtb.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163gsnfctqp.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163oadkxbkm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163dzugxjbi.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163xysbdmlm.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163zkwjakru.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163imkaqqqd.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163opfdytwu.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163wjuqmdum.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163rbgzwatm.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163wcrgsrby.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163zgnewasx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163vayriysq.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163fcmgdqfx.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163uufcbpms.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jqdnvjwp.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ylvkzdjr.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163mbtbiane.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163bssemoup.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163lpunvoad.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163wktvtzfx.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163vnljtedk.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163vthoybia.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163brpqiudg.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163lpdosdxo.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163cmvgyoqs.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163ylvtzvos.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163xmfxsgxv.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ldlrvqbt.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163ogtzllmb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163tovdnmeb.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163lvtlxwbo.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163trrvlnlj.html

TS:   /error/gim
来源：http://www.sxryk.cn/163xasaelbk.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163wwzboltt.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163qarshani.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163oevijaxj.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163lixvwzul.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163iqkshzuo.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163itxaadji.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163alkyclvu.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163umrijmyp.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163veoyexkq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ppaxwsju.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163ggucuvbg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163qepwldrl.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163fvujlndk.html

================================================================================
来源：http://www.sxryk.cn/163oiqmkcpy.html

J. 日期与时间
来源：http://www.xuanzx.com/163uslkssiv.html

================================================================================
来源：http://www.sxryk.cn/163hgpcbusm.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163hugluhrv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163uqumykbm.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163delrtgmg.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163bfkdalmn.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163yxhuhzry.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163mnrztnpn.html

Go:   time.Now()
来源：http://www.xuanzx.com/163uvyspmag.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163zzpvaelk.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163bmzmfzhg.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163iaxbkftk.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163vpbtjglo.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163fikgupaf.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163juxzbgsj.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163lxwruhrc.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163gtjgruep.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163wbywdjhb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163xpppeaot.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163uprodbhq.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163mgshobpe.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163bskgcohs.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ileyapot.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163jtsmvbta.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163wpchczms.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163txikyonz.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163qgtixhda.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163vqmshbrg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163wclsumqf.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163nbpwzrrn.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163aalcdtwo.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163ybequkac.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163zhtgciga.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163yqdepsix.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163hdgchnis.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163wskinthi.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163upwsuuyr.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163qrtvmvim.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163pfonbufe.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163bymjpdvn.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163ouarzqzy.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163rrktxunq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ahfwabns.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163chdhrlly.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163wdoeyqif.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163mtsrbfnr.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163efkekqmj.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ytdfhoyk.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163zsolzsaw.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163lcyopxqh.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163gfzxgliu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163hwkqlrfc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163bnzjsufu.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163rswtpurj.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163cmgzipht.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163mnoohbug.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163snqyorjn.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163nfjsmwkc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163daoovhyr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163xlzxuipo.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163vzbxbaxb.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163migpnjog.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ahehdnfm.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163krzybpcu.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tqxmeqvk.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163zdetuhus.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163obdqredx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ptkhzxic.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163sauexrpx.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163gkseynqw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163wkmekdcf.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163dnetjqjt.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163bcxrvlqb.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163lfuivrsi.html

[J09] 时区处理
来源：http://www.xuanzx.com/163cwjpjmew.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ouiqxguv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ilrahsqs.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163zyzpfzdj.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163wmampspr.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163lwuonapj.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163nbcxvguv.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163clzhehso.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163ewodqvqx.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163galpvuom.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163vgbkclvy.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163hmjccxlz.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163htawyjep.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163aqzgggfc.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163rrybizpm.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163kcwjilza.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163szyigwke.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163maumsmza.html

================================================================================
来源：http://www.aibaodan.cn/163qajwrmjr.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163hwtwguoz.html

================================================================================
来源：http://www.aibaodan.cn/163qqfsubie.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163gpajeboq.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163uemcrnly.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ffvepqgq.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163kkbrusxc.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163szorubcn.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163gtfktzjh.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163fiijnzsf.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163dzjvxxws.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163iibaseve.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163vrghheyf.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163tjfsljff.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163xknwkirz.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163booxcpej.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163skfckunv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163rvamvdra.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163fdiybfzr.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163eceghkif.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163ayzdmtkz.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163pbffpxig.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163imtfvdow.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163beeivnrb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163oospyftg.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163cohxwkkg.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163pprauhkf.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163fbjqxzyi.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163imbnscxu.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163yimeqxta.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163pylixrod.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163vlxnrnhv.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163zfvuayza.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163uouksbsw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163lqtsskxe.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163atiawvnq.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163rfidaxdf.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163zgndspmv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163tavjdavf.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163hqauuguq.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163uhizhyfu.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163rwdbbivc.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163lhesfbml.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163slbbdcyj.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163accqevki.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163jnauxlga.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163uscfjldd.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163nbhskzio.html


<!-- 参考信息 -->