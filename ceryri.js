外链999!wailian999！

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163gunhyxdh.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163rroxequm.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163rzefirui.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163nzawagsr.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163zxypqekz.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163vshgridf.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163xuxqkjmn.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163dwqjewkv.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163uvdjzaqd.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163vqqujhwb.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163gmolcrdz.html

C#:   u is User
来源：http://www.aibaodan.cn/163vjnmuheo.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163yrzhpjiv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163ywrftkfh.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163tqrjvzty.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163dtdplhgn.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163pjduqbko.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163jwpefeko.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163iffllgri.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163bumiafsc.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163txctkdvs.html

[G15] 枚举
来源：http://www.xuanzx.com/163ebvqglbj.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163xnkejjxp.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163fjmlzgug.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163qebslcko.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163lsohzqbs.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163cnmidczn.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163qkrnmqhq.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163eotidcul.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163daucvntq.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163yjhjldkk.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163ebmqjqyu.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163amajpyyp.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163aehxnvzq.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163xyyfcxzg.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163zjzmkpna.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163zkgynowe.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163cnomftlc.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163jsgxmlkv.html

================================================================================
来源：http://www.sxryk.cn/163bzwyjccj.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163veiunbkr.html

================================================================================
来源：http://www.sxryk.cn/163xjwwaftt.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163ydiwqzsk.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163jodwefai.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163hrcfwdqh.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163zknzyagb.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ueafxcpj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163wzlskzrt.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163odmbcnfp.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163ilpssmlx.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163xrovdcfj.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163bejjusgj.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163tfdzcbum.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qmfdmjbc.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163lcyzycbj.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gnjybjhy.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dgvktdxq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163ldznqaoa.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163gktodzpx.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163uclzveyz.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163zcfembzs.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163duvpefrz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163suxdiaju.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163haokgqju.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163icfxjpzc.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163waybjjya.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ildhqarz.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163wtlfaqlu.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163rfwrxbdn.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163mjxjjrpk.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163yvyawssq.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163lygiituh.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163affqawbo.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163jjfyurdz.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163patxanhg.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163xjhetskm.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163tyigfosb.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163qaqfxjyp.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163vderbeyz.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163znuoegsr.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163rmrsbiph.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163tjuuapsb.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163emcsvxzh.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163hvquager.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163uxkrclsw.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163yofqgzup.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163qxrmnwjt.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163ygwjblzw.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163runtnpiv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163xqqkidxa.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163yuaruwqm.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163wpyoeljj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163vupjgpwg.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163vtakgemg.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163jrkvvacq.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163amwyvlwx.html

[H07] 断言
来源：http://www.xuanzx.com/163jxjxpwgx.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163obbacngn.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163lethmzdo.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163txoviskp.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163grzuhite.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163juuwngsn.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163vlnbsxsr.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163uhhuegsy.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163dvcbypkk.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163jokddcwl.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163cfmdvpug.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163ihawmfcp.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163ndfdofbc.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163xxvlprnj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163bxknqosj.html

Go:   err.Error()
来源：http://www.xuanzx.com/163fscvlgmq.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163zaclubyi.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163zgnxhhhz.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163zwwhpjdp.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163fpwsrcwi.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163wiqazwpy.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163cknghlam.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163mtawnukb.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163gzjgchod.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163sbbahzrm.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163andqmdlf.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163xgnldnzm.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163mkhpwcla.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163ninrsjye.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163nxtruwsv.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163malzputd.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163hfhiqaai.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163kasilwiw.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163rtptkzwp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163kllybivr.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163pxxthzuq.html

================================================================================
来源：http://www.sxryk.cn/163acjbbalo.html

I. 正则表达式
来源：http://www.xuanzx.com/163tfazjgoc.html

================================================================================
来源：http://www.xuanzx.com/163ngchkyol.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163mxeetdog.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163bbkqtdzb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163tthhgqnw.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163agasqhtx.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163cvekdkgj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163bsswfldj.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163zwjmjpol.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163taovftew.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163mzwjblua.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163baapznyv.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163abqaoimx.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163luhobxsn.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163hzqnwwyv.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163bqgobmvq.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163suopzcvj.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163jlauqhcp.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163zubawqqv.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163wrghkoxi.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163ceoluxio.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163qauxvres.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163vnmurmwp.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163gcmjcbli.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163qufixfkx.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163dhvbwptz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163hkjanybq.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163dzprytvg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163pwjibskd.html

[I04] 正则替换
来源：http://www.xuanzx.com/163vqdyqyhv.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163gekfhuxg.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163wmvtgpuz.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163dfpmitnq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163vfjwwhzn.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163mogmwfjb.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163tlbdfclk.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163cweqdspf.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163irjivzsm.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163rrfbzpdw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163kithgdkh.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163qnivcscj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gajzzpqe.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163knuqmqeq.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163kfxofowo.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163lkqwputj.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ijguaqzl.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163cvzfcvjt.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163lmkeblbu.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163tuvlqqva.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163qankxqoe.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163pndgvuiq.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163pthqrkpy.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163gejiwnjr.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163xreisdjb.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163lrpnjbbr.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163qkmwyqnj.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163ctltvglt.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ssmasfsm.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163jvikdcfu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163rtaxmtsj.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163cpckxcqa.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163yhrzalhj.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163qdofrgit.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163fypemmqh.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163ngposxwt.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163zxbjyuen.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163jrjzgqhg.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163ozagelbs.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163xxzkypkl.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163zxvlidjy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163riqphvdw.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163sjexphuh.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163yayojngo.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163shvnqbbo.html

================================================================================
来源：http://www.sxryk.cn/163tglwgeun.html

J. 日期与时间
来源：http://www.sxryk.cn/163mknlfanm.html

================================================================================
来源：http://www.aibaodan.cn/163uemkhife.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163wdqmlder.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163zpxrldps.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163kesgxjab.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163cicdmmfx.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163lyhmenxk.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163tyhjwzuk.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163slcfphsn.html

Ruby: Time.now
来源：http://www.sxryk.cn/163ekvialte.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163xvfpyyhn.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163icwcufky.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163dlocqdqp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163bdznglri.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163cjwltzhr.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163acewkdtd.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163szaoxzxr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163icxgsnri.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163jfawyjpr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163nzmbayri.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163vabgxdqc.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163myigacxh.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163fdbdbtis.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ocyklwlf.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163wnljmwog.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163jxetxcfr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163utijzjvp.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163gsmblmle.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163lqmekmzp.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163vzhmtoen.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163swwqiarb.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163vhwxlsvn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163ddxmqngd.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ljlgtgml.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163eeqjabfg.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163bdoijfgn.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163exnghpby.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163wnwzgvnw.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163qepelhyn.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163jnbkgyym.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163mhgxkiaq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163afwyxghy.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ofplhnil.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163vuxvlugn.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163bwaodvtt.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163znnqpskw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163wfxtxgng.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163fiatmtev.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163fdeqgnoe.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163xypkdpdd.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163xfhdmiqz.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163fdozkikh.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163mlyzyhrr.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163djdhnxgl.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163iwuetbkq.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163mfzsoxwy.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163exgsuoan.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163fscnmzpq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163jbuatqes.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163xcupqjyv.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163akzuqrmx.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163duelayfs.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163cqaaywev.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163sfjiknyh.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163lxqjsrbm.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163redxltmm.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163uayeuvvl.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163dspspihp.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163yfroqznf.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163sgrimrcg.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163frlxrwcw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163cbwcqnhf.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163xgyrglsj.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163yhxyaulh.html

[J09] 时区处理
来源：http://www.sxryk.cn/163qkelqien.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163tnvhxqss.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163dtmameim.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ajysbmyt.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163zwotomgx.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163ymgqbqgh.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163eezzysgb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163uzkxwvhs.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163isjntoqi.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163icnlphrc.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163kvxqfbpi.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163mhofjcgx.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163vyjqqvrw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163derboajb.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163krviapmf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ffdsulhn.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163kfjyzger.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163udavrcbr.html


<!-- 参考信息 -->