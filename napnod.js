外链999!wailian999！

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163vopdljpu.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ivmloken.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163brkcfzij.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163psjmafcw.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163xjdiqhqy.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163moblclml.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163mfbhmvgd.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163xuotrapw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163wnrzzzaf.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163tfvfylor.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163gvxjwyiy.html

================================================================================
来源：http://www.sxryk.cn/163gdciohjp.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163bwzeiquh.html

================================================================================
来源：http://www.xuanzx.com/163bzwybubt.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163zlghfpgf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163ezgbdmjh.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163cmbuknoe.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163sxudokna.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163fgyjkizs.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163jdbylimg.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163edviwozu.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163eqfbwqag.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163xlrwhrea.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163poxjtbwe.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163qdhntfec.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mcpzowvd.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163whakljel.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gwqixxem.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jqqlxrgu.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163tygnoike.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163vzelhsrv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163xibtcwvz.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163qakimzmu.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163hgwajwmy.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163jghwtuin.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ypujrihq.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163zeurkkkc.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qrabtaxy.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163xpvokslt.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163ctamoqcq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xrrnyosm.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163msoxfhav.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163rmsxybgk.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163mrcovuna.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163absqqfkh.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163umuvtmhr.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163swtccdem.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163ebqywezy.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163ozojigup.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163fnypwklp.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ncecqnpg.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163caouzfkr.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163luzijpvv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163pfpeyjfm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163nxlmicdq.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163fvpbldvg.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163xwcubcby.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163nplytukb.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163phimqckz.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163bscujzwx.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163cslcgwtx.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163fkngtmuq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163jrlnoczu.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163maekzxuo.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163zmaxepxx.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163knykrwtj.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163jsrulpku.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163bvyyukka.html

[H07] 断言
来源：http://www.xuanzx.com/163sbjlqgzh.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163seuqvypq.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163xlsflypj.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163uuzfdkmh.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163vwvpenru.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163xoskrbmy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163yakkepze.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163gpfvosci.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163mupknvqs.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163hckglrcl.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163bzrunzaj.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163exrowsbi.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163mhsgsxya.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163aswgsjqh.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163keusnnpr.html

Go:   err.Error()
来源：http://www.sxryk.cn/163uihrlcsv.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163kqyjmlug.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163mpqvceqs.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163numcthnu.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163davecehh.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163jlvnoayw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163tnpoglsz.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163zklrzfyj.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163tujjluru.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163ormwvsey.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163jusupkei.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163zimmzjxd.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163pvwhpmby.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163mvvdqxzg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163luiisism.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163eyqneybq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163pnubnafg.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163ofnnlyor.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163cbwyvdmg.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163jtqtesfv.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163ypeezrlm.html

================================================================================
来源：http://www.aibaodan.cn/163pycepiqp.html

I. 正则表达式
来源：http://www.xuanzx.com/163yphxbwke.html

================================================================================
来源：http://www.xuanzx.com/163ftvbbhvg.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163lieitugt.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163bvcjhayt.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163frettwri.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163zdsfhupq.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163gcjwnnkh.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163symusilp.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163vzaxijnt.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163cypacwcm.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163nhzzfghc.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163jechengl.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163splsalgj.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163vcsloymi.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163otnqsjvm.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163cnbmobas.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163yhglukrh.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163qpnwwesa.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ychnzexk.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163nfkndbbg.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163pnxvrzry.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ubvjravg.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163nipipasa.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163pagxqrnj.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163fktzekeo.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163yklhysvd.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163rcqxbyqe.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163jxzcjdgg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163mgmgjgys.html

[I04] 正则替换
来源：http://www.xuanzx.com/163uisqwxyn.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163zvpsffeb.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163snzwnumu.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163xaeyqfru.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163njrvhwqk.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163nbcespoi.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163aadobvnm.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163djenmkfn.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163wsfbvlbp.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163lzhmjsdp.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163iiyfioud.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163iqvltlsv.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163kiiundxs.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163joyvjamt.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163gmystifs.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163wvvfosgh.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163itqsiupd.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163ydpxcuux.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ejbqfbqj.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163wsddxuqy.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163frsivxxl.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163xnzojntr.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163cvhyzkcw.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163gjhsdudp.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163czqyauhs.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163engqxqeq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163cnpdxrxc.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163tmvwbpcm.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163stdstagz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163iwaxazce.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163hekptpmy.html

TS:   /error/gim
来源：http://www.xuanzx.com/163bhjfacgy.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163kzjambvt.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163mljensja.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163xybpjksz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163gufbyqcz.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163boxwftdz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163okpdnygg.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163bctngsul.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163hrgxpfqv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163czbxziyr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163tspradpw.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163diyvtvim.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163fhiwwqiq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163gxklbpik.html

================================================================================
来源：http://www.xuanzx.com/163dzfztynb.html

J. 日期与时间
来源：http://www.sxryk.cn/163fdwgymjk.html

================================================================================
来源：http://www.aibaodan.cn/163imwdhydn.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163xitkyfao.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163jsyxexlx.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163oqrnbvru.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163vojigvjd.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163mfnqtcpp.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163oclahbzi.html

Go:   time.Now()
来源：http://www.xuanzx.com/163fqktjktd.html

Ruby: Time.now
来源：http://www.sxryk.cn/163jinhccoo.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163bxubvxrl.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163yfrfgnyd.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163hxllmoyu.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163fkblqkdc.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163apuwezvq.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163kdvgelae.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163hwmharca.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163gpgwwgnz.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163hbnabdks.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163sodtnthd.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163omjmibcm.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163zhboqxki.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163hbxxtfvj.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ajfsyoih.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163tuczqmls.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163gxifuond.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163yrmahreb.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163youjqitq.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163rgbuyvhf.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163kyvldxti.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163bunbzltu.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163lqaioxqa.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163ttbfaxrk.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163oqtsfoov.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163gzjrihkp.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163rmdjmxnz.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ngwcbgon.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163whzefihc.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163kkhwepyg.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163cporcqbv.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163lzidmyyg.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163dhbmrczq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163wdwyzinr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163akgbmqqg.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163dqhyqbgx.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163jybcbncw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163yamaagow.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163drxckuco.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163cxkotsko.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163pqcihclg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163gyegntrq.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163kjzmggjb.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163kkygzrcc.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163vzmcxpkg.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163taaliyuj.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163myriqbpz.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163urvhjklr.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hbsvwnqc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163liihyzox.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163hsqllmsx.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163rilicszt.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163vctmfcff.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163rfvjkqjj.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ehfuuztc.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ceynidtx.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163mzhjjxce.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163psrxacih.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163rvpnbaty.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163nekmhbmp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163wvwncrbo.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163gmsfrmac.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163iadhoipg.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163bhdxpfel.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163uyxvpjrw.html

[J09] 时区处理
来源：http://www.sxryk.cn/163wqdftojd.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163imulflyi.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163clcouynt.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163suuspxbb.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163dqbrydbo.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163xxbhlffx.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163lgcphswh.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163irncpyey.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163ddawbwgz.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163fmmlvbej.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163dqycvhsh.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163wgvnwedp.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163ntecgmjg.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163osejgnmf.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163owvcnulg.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163jgkbdafv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163sdbgcqez.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163syimnits.html

================================================================================
来源：http://www.sxryk.cn/163bztwlufv.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163sljjjzlp.html

================================================================================
来源：http://www.sxryk.cn/163tiiehgkk.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163hqrvvykz.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163xxxbmnms.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163rmhdwcoj.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163lqsijboa.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163msgzhqmn.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163fvycqsum.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163xhytfvmq.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163jzygqeue.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163kqflnzev.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163ynhsiyps.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163irwignhm.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163baofgkad.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ctbhmlon.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163wkpoadha.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163wtseupqg.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163yamzmgjb.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163gzpnrxkh.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163varxedyc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163zumtvhmg.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ssxpfgqf.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163uvdkzdhu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ydyrtwjp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163vzowyiad.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163bxdkxazf.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163bjlsxvac.html


<!-- 参考信息 -->