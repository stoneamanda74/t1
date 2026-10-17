外链999!wailian999！

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163zqilcxll.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163kupskplf.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163xgxrvqix.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163yczowqsf.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163kcxfucdz.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163fhrxahkb.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163qbidpyqr.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163sjfwsqby.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163xfgbctln.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163vsaqqyox.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163hkhvghmn.html

================================================================================
来源：http://www.sxryk.cn/163jokaskdp.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163pdidjnua.html

================================================================================
来源：http://www.xuanzx.com/163fkdskcal.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163agyijint.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163botrdowo.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163wlvcxuvl.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163lmbhvgzy.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163uongijqg.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163faquxvfq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163hvaxfpjl.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163ktzwhsow.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163clyjbgfz.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163rhxaynay.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163svsbfsgv.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dqkcnpoc.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163xsfmndyf.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tyoxezbf.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ffckheqg.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163pbilkmkp.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163jxwkfypq.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163pswmhivn.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163eirvmgec.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163muynbmng.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163pqjvagdk.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163orihfcms.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163uuhhnfeg.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163rjqmxyty.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163jqtkwmpm.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ivhwhodv.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163mthfnund.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163holxociz.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163rjoomxzp.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163hxirgofv.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163xuvhvomq.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163nxwgkmya.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163xgdjvuos.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163rnctbrqv.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163xmelptuo.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163hoxaayib.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163hruttfpr.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163nbrpacas.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163qnymnuix.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163nysjldee.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163dzwdznwd.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163xpcakkjf.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163ygqflaoo.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163qewvhzzv.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163daglxdck.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163ybdawduv.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163xilporou.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163ihdsdnqt.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163zwtnbsrm.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163muphjwln.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163smyebmgy.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163spudnknt.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163lckwskgp.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163wcrmgosm.html

[H07] 断言
来源：http://www.sxryk.cn/163tiptmpgo.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163hbspqbtj.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163calgslgq.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163oybbhjgn.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163fqztyrkh.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163etahkmww.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163vxsdebjn.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163dtvgihdk.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163btgmdnnd.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163ifxivmcz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163osvebmur.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163fvwwlitn.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163vhlwglbi.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163kaubpueg.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163kzhigdfq.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163rvpqfldf.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ltmrmffi.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163swufrlmw.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163fqgcxsqv.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163cqmvrvbp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163ciqfiosm.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163dqxttyut.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163dyvdvqzq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163nlftdnbm.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163sinrcjxz.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163bxvuvhfg.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163jvkqcspg.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163biqayuoq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163jxkcdibv.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163ociznccq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163inliqxud.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163obqtyven.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163xcalxqvd.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163qtgpxoqc.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163gdulncmv.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163bfgbjbuo.html

================================================================================
来源：http://www.aibaodan.cn/163oqjqkddq.html

I. 正则表达式
来源：http://www.sxryk.cn/163bupbdzax.html

================================================================================
来源：http://www.aibaodan.cn/163pcvwbgzi.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163shdyfdre.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163ucjpdphl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163htrbikfy.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ovsztxih.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163wwtjhhnt.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163udpjjred.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163lkkjczra.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163nhxkyxpa.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163epfevhtz.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163bsaqkuap.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163otfcbwdf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163ymhxelfm.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163mfjwnujk.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163wwlkrkci.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163qcqwsecg.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163dhtxpnyw.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163rtdrxrmn.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163xvqemmwk.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163xdckagtp.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163hihmgqgb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163mxezovzj.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163oenqkuap.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163szbciqqd.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163gddffhxl.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163qidltvtz.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163agdzqrud.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163vrgbdinv.html

[I04] 正则替换
来源：http://www.xuanzx.com/163gvybljyf.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163ehxqkccp.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163caglgqea.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163iqeelwmb.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163aixtllia.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163ijhnikxk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163jpmanwns.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163dzsvewxm.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163phlzoupa.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163hgthtmtq.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163xxbogawm.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163ibcimzno.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163bltpjcry.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qzautgps.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163rgjwoioj.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163cyhjsobv.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163bumssumw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163jsajiqmw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163azcctngg.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163rauallog.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163xoviyewm.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163zloperij.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163zmvzmvbf.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163bcdwkhpf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163ecxxrwly.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163fcgcpsxx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163elazwglu.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163goqsfbhj.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163jcyyoqin.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163qxaopanl.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163jgprrrpv.html

TS:   /error/gim
来源：http://www.xuanzx.com/163kfboevot.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163nvlnujua.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163udkuqbll.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163cykywfea.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163buraztgl.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163ciyobkxc.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163gmngyjan.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163lkscynfj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163pcfhgglw.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163gyrvpbcr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163ptzcnlwc.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163rjheynns.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163hrxpqojl.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163biidmnbd.html

================================================================================
来源：http://www.xuanzx.com/163uskgvats.html

J. 日期与时间
来源：http://www.xuanzx.com/163rzqanigb.html

================================================================================
来源：http://www.xuanzx.com/163psafehdm.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163irtfbavp.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163bhdxpyes.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163omcmawun.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163miwajcay.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163fwtasstc.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163xucobfxr.html

Go:   time.Now()
来源：http://www.xuanzx.com/163fskazdez.html

Ruby: Time.now
来源：http://www.sxryk.cn/163gfmqvfej.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163rjplqnlw.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163icvehgqb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163vwalkpqg.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163qnflezud.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163nylpraxf.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163mchnbcco.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163vffxdtpv.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163bmldoxiu.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163axuxkmuj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163apyfymkv.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163uyugbilt.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163gnynnczj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163bfgrrukc.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163wzxbwceo.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163znxmeogk.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163swtjpxsv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163mmchsfug.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163wuunxivk.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163swmklgci.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163axwyresp.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163epvcssyh.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163dnplvqgn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163irncermt.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163gxladirm.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163ouammzwo.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163ninjzyfj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163mumxkxxy.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163gjgbdvlw.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163dgzqyyxm.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163ywjporke.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163pdmiolcg.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163hhmnmwzr.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163fwzzhqps.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163hjplxcgr.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163bzrevdzv.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163iglmmuwp.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163aydjhzbc.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163eyhocdiv.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163uxjthoda.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163qjlahhgv.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163torcgjsr.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163dhzcbqqm.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163trifryrh.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ddiqnawh.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163tpvaiyzw.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163dbziugdi.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163ratithui.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rupckwko.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163dcveddvr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163gifildkt.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163qyvttyrj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163jyevggyh.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163iekoczka.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dmeueggd.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163pnqupskr.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ckcrwwgh.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163dbgpdddw.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163nutykipr.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163koashjlk.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163elvzwixk.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163zbclxges.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163fhhpujer.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163gyftudfr.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ecxakiqi.html

[J09] 时区处理
来源：http://www.xuanzx.com/163blnalada.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163lijfklgw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163lpfeffdt.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163holhkifs.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163iudfugbr.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ydsmrtmm.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163jnnqqkfr.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163kabqxppe.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163rycsetlw.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163kivtrzfk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163aerulxlb.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163lpsnyebq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163msbdhcss.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163noczpdoy.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163aoyipbrb.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163jjrnzquv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163qvzseule.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163vobxtfyi.html

================================================================================
来源：http://www.sxryk.cn/163pxhelirt.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163igjpkaka.html

================================================================================
来源：http://www.aibaodan.cn/163xmrssxjz.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163lzjfguyv.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163axqgoovc.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163diuchhoq.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163jyubhtsi.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163pkismoln.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163fyvqyegj.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163pmswufgz.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163lbgormpd.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163onswjqov.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163yebluzfc.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163qtbqwnjb.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163gownmyzw.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163njkiclkr.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163tyexcbnk.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163ucelpopt.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163tpxtprun.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163qhnrinhz.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163huthucaz.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163fvobmaed.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163zigasgsd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163gxepcrnq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163cvbyaats.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163tzwhqfzf.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163yujwqmyr.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163ksrnhigp.html


<!-- 参考信息 -->