外链999!wailian999！

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163kxjbdgjx.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163oqinaxez.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ynlgjojd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163bpjktptc.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163cbhzkpqr.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163efksmvec.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163oilpmzjz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163yfqbifzq.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163ejyrtdch.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163huxsybuc.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163jncjitqf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163puunkazs.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163bleusell.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163nogtdkfw.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163hsizvztz.html

================================================================================
来源：http://www.xuanzx.com/163kzzgrkdb.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163gkicgifc.html

================================================================================
来源：http://www.sxryk.cn/163fppmgsxu.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163dpnoijoq.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163ogywjvmx.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163uaenjtbn.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ocmdxegr.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163bjavvtbo.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163dyszbopx.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163wbuzfuqn.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163xiscstmz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163ixlnfeng.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163htsmfakg.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163seomhbmr.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ssortkxi.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lxzuwuau.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wjumlxar.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163pyvlwxsf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163gvucuync.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163zhcrgtcs.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163cjeolsya.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163sbrcifli.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163lfpsbyzb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163pgjsaxrv.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ngcummad.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ahgcufap.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163vernmmsa.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163yhexxjxn.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163rlstajkb.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163uyzxxzhx.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163oolvycgr.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163uanddifo.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163mdzxalgc.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163jajwdmsx.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163iyeegvyp.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163eymuxjfo.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163jdeqyzyc.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163afazwwle.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163dqfwnkey.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163qwrpncfo.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163sixpepzj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163lzxoryir.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163tdmcgfau.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163jkqfedzi.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ryiwtbts.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163jfwoiaum.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163aopfuqza.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163hlaaodqv.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163svblqiqc.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163qzqkanwz.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163bmtaonuv.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ypjzvznb.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163unvuupce.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163epupmbvn.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163hfsembmc.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163oingfugf.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163ihyjurxq.html

[H07] 断言
来源：http://www.xuanzx.com/163ddxchnvx.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163dgtjzjeu.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163oduuqzjo.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163jvauarzp.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163fpdqwcpy.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163pyfxdixd.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163kvhdaplx.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163flyrxmqd.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163bxlkszev.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163ctxigszn.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163tyeukyyv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163bhusefie.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163dqcwozga.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163wrefzsyn.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163kwnnrqsm.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163budsjbda.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163jrecdzyi.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163errbzmlq.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163rlmresrg.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163tobtbnqf.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163ycunzjrc.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163lruaeixq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163bxwjsype.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163sbfuxmnz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163klovydtw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163fiqbdpjj.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163vcknjxob.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163tgrgyhbh.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ldqiiwin.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163tayowibw.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163kkcfhbap.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163yjsprqgy.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163yciaemrl.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163ovnnotej.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163cjbovcqr.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163czdasgmj.html

================================================================================
来源：http://www.aibaodan.cn/163dpaxxjtc.html

I. 正则表达式
来源：http://www.sxryk.cn/163olrtnovq.html

================================================================================
来源：http://www.xuanzx.com/163yzlpqedl.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163rckotiuj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163sivwjfok.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163zpyrufmu.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163divwdfar.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163tikzyohw.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163hzkqniui.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163qtbalxkk.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163jjjhkqnp.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163wzszpacm.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163eckiwskz.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163agwuxcgq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163dwqyisml.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163cotwicee.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163vvhvxrwf.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163hajoyvms.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163atetegrq.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163ebzofgmm.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163bzpbzpgr.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163kzkebfym.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ytgcqwyy.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163klaxwgba.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163kgkmdqfh.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ckbbtjhg.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163bjbdfjdv.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163tyfeyllc.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163kjvirebd.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163diozcysi.html

[I04] 正则替换
来源：http://www.xuanzx.com/163xrjycqrs.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163ofrkdrub.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163wnknfvev.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163fepqgwqh.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163viyoxcjn.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163fwagxmzy.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163krcubdez.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163plfdasjr.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163tofxrbvb.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163xprehmwb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163monbvkvr.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163ahufrwdi.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163zbhczhft.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163lyvkmqug.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163jvbjayak.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163rtwiuruw.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fvfedkou.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ulahlajz.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163hxceldtl.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163vzfpjtrx.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ulqayfmx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163unfrxzhy.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163oojkojcg.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163keukjbzb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163barnbxbg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163djoiulji.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163wdrfauma.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163clcwaxxa.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163zlyqrvkc.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163nbkesooz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163takihvec.html

TS:   /error/gim
来源：http://www.sxryk.cn/163iydqbsfb.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163hzlxufuy.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163kjjpjypz.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163tfdmgkbd.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163bfsfecfn.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163ulrjheek.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163pfowjtjn.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163sgbdhaec.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163xqwxztih.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163bemppcso.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163hqxvzbov.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163uckefyyz.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163ypoyjomz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163pkwcthad.html

================================================================================
来源：http://www.xuanzx.com/163wuvnrxdn.html

J. 日期与时间
来源：http://www.sxryk.cn/163swxvuhxc.html

================================================================================
来源：http://www.aibaodan.cn/163sfxtohaf.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163vclcuciu.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163rygtltmx.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163epadtjed.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163toasbcac.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163qslxkkhq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163eyzpmxcs.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163fisryjzq.html

Ruby: Time.now
来源：http://www.xuanzx.com/163utnoaydm.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163mmtotrps.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163lioyjiad.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163gweqtytg.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163diugjzjr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163grnxqwmi.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163zjsecwut.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163slrioifs.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163meplhzse.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163kulgennw.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163hmwqosjf.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163wcaulxha.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163njogwtwy.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163harzlblg.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163pzcgtkad.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ebcsoyqu.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163khoecfjv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ptpnnhkr.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163fvbldasv.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163ggyjffoi.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163shlykvxh.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163ybgzjwkr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163rhhuwccq.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163nzefdvep.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163dwrlurow.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163fbmocgpa.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163fotqawhl.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163ssilbipf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ixaijodb.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163explxuay.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163nqciddmu.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163ntdwnsei.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163tpiibmib.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163srcgcaea.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163lmsmhmev.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163uthgaviz.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163wolieurb.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163nyspxugr.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163korkunlz.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163kudzzhbr.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163uzsmfapp.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163egkhjyen.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163rcmyhrdh.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163nhtslyop.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163kcymubnn.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163pivwgtzu.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163ioxqosdc.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163wzabnetn.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dypsggyz.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ttxqntog.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ocvnspyd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163tfymrjgo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163yvkfkwxd.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163mfrwpctr.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wpbylctg.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163iykdntry.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163finmrokk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163whvlpjwx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163lvdhlzhc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163hvjrxket.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163yoyvwttt.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163fgujelus.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163alsekwgr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163raiusnjy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163wgahmdaa.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163gbigziuc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163kppidphk.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163xpqupbey.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163qmorymjf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163hohpomwf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163cswkkifu.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163qkljbjkf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163qtbrkvye.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163dsetszfw.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163kswkxaqz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163cfipjkeh.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163xyghkxbe.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163slhscofv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163yhckodki.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163rbisbqmz.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163nhyjpwrf.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163jtqwymvz.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163jxiopwyn.html

================================================================================
来源：http://www.aibaodan.cn/163rvpmlsvl.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163bmzlorcr.html

================================================================================
来源：http://www.sxryk.cn/163ycrwjvvb.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163qnjusldy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163jzagrqsz.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ixqksdbo.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163hjqizlbm.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163nhurgrky.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163axpbcmkd.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163hssmzmcq.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163fgjjlbvf.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163aqwdopqn.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163dqprffja.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163apkiqokv.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163lkxsowkf.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163lfcbhrem.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163utlccvzh.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163tidjtjpy.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163agmnphli.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163ncezecqi.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163qwqfwbbv.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163mhbxrrwd.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163uuyabhxd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163zicedmqc.html


<!-- 参考信息 -->