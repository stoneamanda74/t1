外链999!wailian999！

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ixomiffe.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163rqptends.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163wznzzegk.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163whuebyir.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163aezysdbg.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163ohklgnnd.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163jqhlbhcy.html

C#:   u is User
来源：http://www.xuanzx.com/163idaiefqy.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163uhaimvll.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163nmdrugox.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163qclmoksf.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163urywnjea.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163mmkwxvnb.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163gqkibqvx.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163zvzpmxac.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163dbqncilx.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163pvnaldmr.html

[G15] 枚举
来源：http://www.aibaodan.cn/163otzqqntf.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163fiaejywl.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163asyummoe.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163zmpfjjfl.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163sqbiwkvx.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163aypbvtxc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163kigjpfwx.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163jpdzvwpz.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ulbqnrbs.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163mmqyxwiq.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163fmrjciqd.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163fwprcayp.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163nztmubrl.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163hjchcvnt.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163vgiazyjd.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163eunxvite.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163janrwkre.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163ygtxrwth.html

================================================================================
来源：http://www.xuanzx.com/163rucxwrtk.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163tpzfqour.html

================================================================================
来源：http://www.xuanzx.com/163nyaljujf.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163vrkqiahk.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163mzzgjgnq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163ounwnadn.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163vcspqrtj.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163jyjidypn.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163knvmtoag.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163oguwwsrg.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163uykcpnxh.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163sslglzqv.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163nsrvprco.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163yadoejtp.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163bfmlsfej.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wbghppro.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xxocxmua.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163grndxwvq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163jrobrdke.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163spmictak.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163yfawyqoa.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163fpqnezok.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163nbctoxaf.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163uzihmurk.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163pgnriies.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ezqjpmpa.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163unkiyaxj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163nofjqwpg.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163lkuqmfbv.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163fnopsbkf.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163fsjwnmaa.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163hlzccsku.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163zxcggxsk.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163oachlqdr.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163bvmjpkyr.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163cziyjssa.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163qbxxkrba.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163daurmbgt.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163fllmacri.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163fsbrchua.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163welcegqj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163zgmdbeby.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163jgrytqxf.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163opnmqsyx.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163vuheenvb.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163tqphkxof.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163asamimjn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163mpwuwrea.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163xzmcjawy.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163lokhkjaa.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163fsdmkwii.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163scifwuwx.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163awscqnvo.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163mjjyjmou.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163lysdlcfz.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163losjpnke.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163mmtkmhbi.html

[H07] 断言
来源：http://www.sxryk.cn/163phguffgy.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163uzsbhevp.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163dvwfyosp.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163cjdgnacl.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163bxtcmqgr.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163xddjzxcq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163gfrwlsvc.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163rdktgcnn.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163nlcazmye.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163ouhawgmt.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163hscqtadx.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163weuwjhqi.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163swahaoih.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163kwwckuxn.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163fgbsvout.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163yndfuzcj.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163hfpbfzii.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163qmjwivff.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163zwrkygfd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163mmmqcwcu.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163aifiwcdd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163bswyoqiw.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163rkqhphmb.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163aaapydpi.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163snbbzeae.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163aedaaufs.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163qizpzzrq.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163tpnghsoq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163cpvrtfdf.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163tmawhmkv.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163dzlkdnmu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163loedicvc.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163ooqdnzom.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163nxmquosr.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163rgmdabcz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163tvkubbdt.html

================================================================================
来源：http://www.sxryk.cn/163xuicsski.html

I. 正则表达式
来源：http://www.aibaodan.cn/163cvcwqgxf.html

================================================================================
来源：http://www.xuanzx.com/163ngcnyrtl.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163ratsugtq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163znbeacft.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163rwaavmwp.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163tjluciyf.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163llcwuqae.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163neybnfak.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163taxsjcmm.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163sggjsgyo.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163xhtdtowr.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163fofvxejo.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163zqnfldnl.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163mczntgjz.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163zziiwegb.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163gimceyth.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163sfvkjmdi.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163xmgphawg.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163niwgjfyq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163uuweejgd.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163vcblpnkk.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163dggwsukz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163bchbqpii.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163zulycbdz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163dmvpgjps.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163ajobeqfz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163fdldqtjg.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ppbzwgra.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163mqdyzayu.html

[I04] 正则替换
来源：http://www.xuanzx.com/163cmasktyi.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163sifxsuhv.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163derrorlj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163wfwbbixn.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163akhrjqqu.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163vamiezsh.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163skyyanep.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163svqqsgto.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163dkyugfgj.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163bxjwkwni.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163bkhbuaja.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163hemzbauy.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163npnphoor.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163kojmiuum.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163adxpskwg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163kiuujwsa.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163yzdaxios.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163plpbzvrh.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ijwgqtli.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163fufmjiac.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163gdppygcs.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163hjrypfer.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163xndbkdsa.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163iwrsjaap.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163xkccweha.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163cccmxzio.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163bqlrzlph.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163knxnqnqo.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163oluafncx.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163xkunotko.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163dnbvpgtu.html

TS:   /error/gim
来源：http://www.xuanzx.com/163zhbetgqx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163yvyhnvks.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163wotfjvdq.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163dcdkdgnx.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163gefscwps.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163osjhcafs.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163wbzeuzrq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163vsrsjgjt.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ytijgggw.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163lbhylwrr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163wrdjefzp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163vrruywnx.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163ttymmxjv.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163ihjkbreb.html

================================================================================
来源：http://www.sxryk.cn/163gijcdzbb.html

J. 日期与时间
来源：http://www.xuanzx.com/163hhonvedr.html

================================================================================
来源：http://www.sxryk.cn/163oamxeklv.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163rwpxdrwd.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ykcksacs.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ikbdlrle.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163hamexdcg.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163avdakjjp.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163woyafzjm.html

Go:   time.Now()
来源：http://www.sxryk.cn/163ruxestxt.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163psadmjve.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163buzdhltp.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ttxtqpie.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163gixdxtdf.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163pamrgxmt.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163tjdxgoog.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163bxpcjqse.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163ybsvekpk.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163dpfuwawp.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163hhhdhmno.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163jxgwuvkn.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163xotelysf.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163loussibz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163vvycvfxk.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ttoirkvo.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163pcwpwguj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163alwqaufk.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163abzjqfzb.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163vwydrxip.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163fqubdfeu.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163neaxyiqs.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163eaqrtcdm.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163wgflnmbw.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163empzisff.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163dniutxlq.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163crapsnwi.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163haiausem.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163qszjifjk.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163kwymyqyq.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163oxttcnau.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163cqapttgg.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163iwrnxryp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163wbmjgtya.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163xfstizsz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163qpvhdtzt.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163njncpbuo.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163ruzycjkv.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163lwvfdnpi.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163shfkjibk.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163wcvgahbo.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163ubuyxcft.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163tdauouci.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163bafdsehl.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ptgvhyci.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163sgekzzjv.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163jgrisnrc.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163vrhdundn.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163mmkiqyda.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rnpyozkh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163mssrzaan.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163jwlynukz.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163tpzequkz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163qauweeqt.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163oqqugfsa.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163nchlyqyd.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163meiaxxkq.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163bfxxzwhx.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163pvbftxud.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163lnjgojne.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163uxyitrbp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163sthwqtkw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163voysvxhd.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163vulyqkqz.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163qiwiyotr.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163twltxjjc.html

[J09] 时区处理
来源：http://www.xuanzx.com/163wujwunvl.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163yudfuxza.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163bskhvczp.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163gmnphrin.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163csokumkb.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163plhhkoed.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163gwhabxvz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ltrjukgv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163tusxyxii.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163xefcplqn.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163fgwwxlcj.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163exzigmrl.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163depjjkek.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163xnkluyxf.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163iksovizy.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163drtixcdh.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163tznyqnlu.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163tujdtufj.html

================================================================================
来源：http://www.xuanzx.com/163qiryptco.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163wtnejrls.html

================================================================================
来源：http://www.xuanzx.com/163chxvnhiy.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163tuugplzw.html


<!-- 参考信息 -->