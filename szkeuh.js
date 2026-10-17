外链999!wailian999！

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163oalprjma.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163dhbdkmmr.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163zlsemzmy.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163kgatthde.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163mbdqaqhl.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163lrgdictl.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163sfsxydle.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163azjhkqnf.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163hkvhlspp.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163ulwzzxir.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163lxagugnq.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163vujwjjhh.html

Java: u instanceof User
来源：http://www.xuanzx.com/163ifwaopkk.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163pzdoikht.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163nwqkzehh.html

C#:   u is User
来源：http://www.xuanzx.com/163xvkxbqmt.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163dejbhqjd.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163tycvurer.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163nrflielf.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163pyevegmr.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163wlpmajhk.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163mtlcgtcd.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163xnitcbtu.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163mtlsunre.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163hgncixhn.html

[G15] 枚举
来源：http://www.aibaodan.cn/163dhqtcbyl.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163vvkhxlxd.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163hoidfwdn.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163bquuxfcy.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ihjkgbcf.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163dejzjucg.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163zsrolonn.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163fzaulevb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ihqawtae.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163vwhbscwz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163citkipue.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163rmwlqifp.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163vuhpnfgk.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163xayndbom.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163djxcwmef.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163hwlvbfuz.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163zjjtbopk.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ynxkidlv.html

================================================================================
来源：http://www.sxryk.cn/163sefrkqgl.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163sjtwohqw.html

================================================================================
来源：http://www.xuanzx.com/163hfvhbnvg.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163jyqqampu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163xwmgvyhn.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163fgqjwyiu.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163uvdtwleg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163vlzhnmuj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163jcbumztx.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163aaidxzap.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163hwwknwfy.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163ogmclwka.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163tpxxugaq.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163xleraeql.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163upeaslor.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jowjrazh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163wnmjfkqx.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163lmuwagvd.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163bshwddcb.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163fbernthr.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163sfbfdopv.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163knmsleyr.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163vujfkbwh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163nmexdfco.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163wxonygim.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163eeiqaudn.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163heelortr.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163kixhwaur.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163jrlxwfws.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163foveajcj.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163pwjqrjuh.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163zfxmamnz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163hapuuuzv.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163wnxodncg.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163pysvkldm.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163wbzjdbkj.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163wlcahddh.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163awxpknwm.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163aoimhaph.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163vpevjugy.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163zvlkhtaa.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163itivvvwz.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163eupswxmf.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163avaojtij.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163wgawktuu.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163phuswnrb.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163weovslcq.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163svovlchr.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163zynaclij.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163ospgmduq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163glltdilj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163uzawjmid.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ymgeozha.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163jqhdqtlf.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163zxjkgtog.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163uaryaxdb.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163qedmlpgm.html

[H07] 断言
来源：http://www.aibaodan.cn/163cqbvgdxv.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163tpjcaeek.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163mduqfeod.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163qhvkbnwb.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163thdkbrkb.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163qdkdcyzp.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163tawabuxs.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163yjvsxbza.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163nassljzq.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163vbtgkbbz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163yzhfatwg.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163kcuujhhc.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163weqkleje.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163azupaxjf.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163nzxfpsix.html

Go:   err.Error()
来源：http://www.sxryk.cn/163mqtzuxbb.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163ohseqpnf.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163mrvrbajz.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ttubfdav.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163neaedkdr.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163jefuqbmv.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163hnyluqhv.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163vpdwleuk.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ixwjohlg.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163aslidgij.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163dpyyeyad.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163uhnlyurk.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163onphlxhk.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163dbyfzind.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163knudclcd.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ugeqkprn.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163fdahrtyf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163tnbuxbqn.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163duhjewui.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ohhdmmkk.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163bqucahyp.html

================================================================================
来源：http://www.sxryk.cn/163dsdawhjd.html

I. 正则表达式
来源：http://www.aibaodan.cn/163kayniicg.html

================================================================================
来源：http://www.aibaodan.cn/163djizlrhs.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163mosddori.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163zkznojzh.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163vtlyusmh.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163xniwugsq.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163vhriivmp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163knwwpzor.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163xujmqgmd.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163tbjkmywv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163tmfbasit.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163bflfcysm.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163eauidizn.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163slaukdua.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163uasbromd.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163zbisrxgd.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163gzlniiyt.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163wweasiku.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163nbfzmhqg.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163secswqnh.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163vazdgsml.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163enpcrvbr.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163yvxfjjgn.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163hckoqrge.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163zcmwykqe.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163nkjjekvq.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163qfjnzpdn.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163vsvkhaqu.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163rllqapos.html

[I04] 正则替换
来源：http://www.sxryk.cn/163baqmcbmg.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163dutqckuh.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163nwaikhgd.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163smcbhbxf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ygfejruh.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163zwmnlsip.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163pktssnaa.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163ufdzyiah.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163djdofgij.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163tugkmsyk.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163rhldogzk.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163ogwwgbna.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163eaptklou.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163rjtpzdgp.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163iidhsdln.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163afpzkbut.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163jvmipstg.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163qhnftxgw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163miugxsfj.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163oxcxsche.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163whwibdme.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163aitbnymf.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163tcuemtcc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163npfioyni.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163pxpleacs.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163qcbhlgye.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163tkgdnrpj.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163vbfoxqwe.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163sjawcsop.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163dljwnalh.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163vjbfroxy.html

TS:   /error/gim
来源：http://www.sxryk.cn/163dubbsnnv.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163vbszhxcx.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163kpiuounh.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163gqgixxde.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163ewdojfjb.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163vzdvrvsb.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163zyzfaeog.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163pevajtsk.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ryqyyhlr.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163xocwhvno.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163qnhuobgt.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163wxkpcrgf.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163cbftobfe.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163ekbelstw.html

================================================================================
来源：http://www.sxryk.cn/163emokohbw.html

J. 日期与时间
来源：http://www.xuanzx.com/163getwzbbh.html

================================================================================
来源：http://www.aibaodan.cn/163evjahcuz.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163qqdvxtyf.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163xkdyqqsc.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163oyimuijj.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163dgdzpafq.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163rqrpjlsd.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163yordndpr.html

Go:   time.Now()
来源：http://www.xuanzx.com/163kqkczyhi.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163jubytsny.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163uawajgwi.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163mrkhgbiu.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163lpotcnat.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163euqrilot.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163znarjyat.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163qxqtbmyp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163mbcfckju.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163vdwgxqbt.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163oxbfdkbx.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163nozbgfgt.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163vmwotvaz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163vdreqmrv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163hixircbz.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163aohhqygk.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163cunccyzt.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163uafphvla.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163mbwdjcic.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163iiqmkkai.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163urdfijqi.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ikqjfxrq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163fyvibmgg.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163kxtwjanq.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163gwkqwdmv.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163ujtddkjf.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163junbfqiu.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163ttrbupmw.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163ozcvruzc.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163lvlytbpb.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163ssapqecy.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163rizsauos.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163acwdhubt.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163rwpfniyq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qoufynme.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163dedadgqf.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163slsiznmq.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163aeqjzxwg.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163kpcdlnhi.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163zbnmpbqi.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163rozrywhp.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163dzusdakr.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163vdbegccl.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163nglpqbco.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163atbzwpow.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163wastoimq.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163vwqgjjxk.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163zuetkiqk.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163onwbufuv.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163bpobjkgl.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163dvfedofs.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163bieesaql.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163kurxtrhy.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163uebjchoo.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163uxmztwmi.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163tevcnntv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163uahvzlqt.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163hlvpiexn.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163vwinpzri.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163mbvivmhp.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163glmyqytz.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163pjsssmqc.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163lmhusavm.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163biqzjksd.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163snijbrjd.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163kmndcedi.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163oyhvnhgi.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163lnrvdrba.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163svsbrvwb.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163syrezgzy.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163matwaafp.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163tanqwlkx.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163wfnwiokj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163hytlaybj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163kxwxbxqo.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163hjpagubb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163xsnntgeb.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163lilaiobm.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163gumhsubs.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163mwprpiog.html


<!-- 参考信息 -->