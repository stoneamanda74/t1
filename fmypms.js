外链999!wailian999！

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163elaujlhw.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163iyzhbqbw.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163takyofcp.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163naruzumx.html

Java: u instanceof User
来源：http://www.sxryk.cn/163mymzczxg.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163rbtybcnw.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ietrhsey.html

C#:   u is User
来源：http://www.xuanzx.com/163eqnrvwoj.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163qygfdlyi.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163zvqgxeuc.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163ubkhbujz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163ygxfckpf.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163znbbytwl.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163luczydfi.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163nyfzolyt.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163hmurwcmf.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163kppbttwd.html

[G15] 枚举
来源：http://www.sxryk.cn/163uuzlxuwx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163lntzhpqs.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163sjsyyxzx.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163qmbqmjpx.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163huajthsu.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163kesbborw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163iiozwfim.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163lckralwk.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163bvupklen.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163kwjabjfe.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163uzaqpvsq.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163hexfvyvl.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163dwmdfmph.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163quukxsed.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163bunvitwb.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163whfscznh.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163snjxqiun.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163lamstfeu.html

================================================================================
来源：http://www.aibaodan.cn/163gzuthjto.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163fztlrxoi.html

================================================================================
来源：http://www.aibaodan.cn/163iolnbbdy.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163wxkcvfgo.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163dvrzkxpt.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163oeksuvul.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163incudwlk.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ylahndut.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163fostlyxs.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163enzbpcdm.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163kpgkclkw.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163xfsipmja.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163qvflfukq.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163bovldxce.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xzdbuoxy.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hqqdnmsx.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bzmwguts.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163rriobefm.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163jmbzjnyy.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163csyccdui.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163dgbjfvia.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163urmvifgb.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163nocdylhd.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163pmwrzyrr.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163rvwvrjgu.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163vyizpdmb.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163hvfdtpdk.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163xnjftnxr.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163rkudkhwt.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163aizpnycq.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163tqpoeuby.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163tdiygmvz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163giiwoncm.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163qlsptmfp.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163viupwnoo.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163whzyazlq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163zqrwofov.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163mopeaivq.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163qfomhesd.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163bfufvwph.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163cezqfyuh.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163jknoqyis.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163jzmkrmhp.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163igzrwzue.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163kspnotpb.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163wwawvdmj.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163tdpscupd.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163dhjxshch.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163lwfzbvyi.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163sropyxgo.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163qcfubiyy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163kqgjyyxs.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163bwpwyntu.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163njvckeru.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163aobuwvgo.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163apvzbnei.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163gdcmwyyc.html

[H07] 断言
来源：http://www.sxryk.cn/163nqoumxdb.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163luzzggkr.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163vnuhevso.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163asaqnazu.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163hbdvtilq.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163azwyfxib.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163fjchfhhz.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163qdgyveog.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163aukxmnbb.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163tyxlxabh.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163tbbraizx.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163fytidfgl.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163icixnxev.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163pvcfdikd.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163hvxyraay.html

Go:   err.Error()
来源：http://www.sxryk.cn/163dgwhllrz.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163khenqasg.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163dozaacti.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163jqotlwxq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163cuwubicq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163pfkfcmyr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163ugmhkkzv.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163fpzirjux.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163zzednacm.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163lczzfiov.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163uthbmpac.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163stywbksz.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163ybzknmiq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163cicgyzkq.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ppkrbmlw.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163wgakegfd.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163sdtwcgsm.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163fwxpjqqm.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163eqhogotw.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163liijifvr.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163hjpbswhq.html

================================================================================
来源：http://www.sxryk.cn/163jmqikesy.html

I. 正则表达式
来源：http://www.xuanzx.com/163uvjqnoqs.html

================================================================================
来源：http://www.sxryk.cn/163sfbkzsgr.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163ywnxwmfr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163fymjjtvj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163rmaqxuut.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163nwkhdmyn.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163nceseluh.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163xwlgkahq.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163jkymtsbf.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163flrmftec.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163vqiavnen.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163ubfmtdox.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163znzfyxgw.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163ggrcsbqs.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163nalazrkh.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163wnobzvjs.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163xyqdruei.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163gubnmnbn.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163tbalapny.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163ghetqlov.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163eldknxjh.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163vghnacfy.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163flkmbgqf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163bivbmqes.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163mhrvzfmz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163uqhlnwvy.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163jekebbca.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163cbpeplst.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163xnxpghvf.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163nopbkuaq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163jqtdvoec.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ofiucdqh.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163gxyajady.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163wesgcpbi.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163rldohxbm.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163goskando.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163jzfkjknm.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163ovsqbbmd.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163ctgdmqar.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163yvcaflhu.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163nerbxxue.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163jyymwjgz.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163vuwayswi.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163liwremrg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163zainotse.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ajonzadb.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ghemntzk.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163ettcqmvh.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163bhfkomqy.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163jcfiphgk.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163yzffjwpc.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163tgazxvvb.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163kpbmwmcy.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163xfovqtmd.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163ismtcics.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ynrtheus.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163tfapuewr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163drrqokdn.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163epqnqkyb.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163kkqtflnt.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163stsuhtnd.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163mmsxvixz.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163vsmtxwfl.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163okzbspbb.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163nukkvedl.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163lijaikvd.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163cvmywocs.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163uhxmyzui.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163iuaakavb.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163gstgcxtf.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163zthtrjdt.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163udikrxgv.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163hwpzdoce.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163zlvjagfo.html

================================================================================
来源：http://www.sxryk.cn/163kgmmfspt.html

J. 日期与时间
来源：http://www.sxryk.cn/163ojukdeyn.html

================================================================================
来源：http://www.aibaodan.cn/163jcgeoexa.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163woskgrdb.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163gsfbauuq.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163qjpuqzfq.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163qkpsvzmo.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163kgqyzkpp.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163rkrjapxt.html

Go:   time.Now()
来源：http://www.xuanzx.com/163wnifkges.html

Ruby: Time.now
来源：http://www.sxryk.cn/163lapxpmsn.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163obvlytxo.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163yvaxstcd.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163sjdrgrdd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163szsevkbd.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ljpyjrhj.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163uamsehyf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163uorqftsp.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163nwduogpq.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163evuetejw.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163fnlvpldq.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163kgfboquk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163itdglcmt.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163dqmhddfh.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163lttzldup.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163jkengidz.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163mvoanrkk.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163nwngcvxd.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163hlxbqpgb.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163vszxuwdb.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163qkeqjiur.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163krcllowr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163tegiawwo.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163kogwmrqi.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163kajjnxzh.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163vmcydfuo.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163nblqnabl.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163yhijtrxn.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163etgqekbe.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163sbjycund.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ttuyzkan.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163zhbnddyb.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163hsfmbewb.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163rhcrbros.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163nzfivzvb.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163ycyohpek.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163zigbxxht.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ctueqxkz.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163pbsijbbc.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163xiibxrvo.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163lekfuncj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163zhbjrksp.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163bcpwtzwi.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163jkmpckvh.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163nuomaxuk.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163iunrxgsd.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163wxxfbdxn.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163egzftkcd.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163gkthddnd.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163zchvwbir.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163uvjtwwln.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163kdywrexc.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163mswvicml.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163qmqooejs.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163siweclcg.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163aiubrlva.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163nerrtcin.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163bodycigd.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163jljocyio.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163qqdpcvxw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163xnnunahq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163fmpbvjmz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163ukabcahq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163zkaubiap.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163lwokqaqc.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163maidowij.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163jmyltazu.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163fpaevxkp.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163neypsmvs.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163eldylulc.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163rfzivkdx.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163lveoobxg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163ukicefvj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163yfxpgdoz.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163psgfsdgy.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163lknssdez.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163peznswbr.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163pltnfduy.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163uiueyvik.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163ukzgttuz.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163xkljjwxl.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163fszahyga.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163reawfhkt.html

================================================================================
来源：http://www.sxryk.cn/163ztyactwr.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163llwcwyls.html

================================================================================
来源：http://www.sxryk.cn/163nqocvogk.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163cwzzhdbg.html


<!-- 参考信息 -->