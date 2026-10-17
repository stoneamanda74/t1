外链999!wailian999！

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163mpjaoxmt.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163mzppdoip.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163jhxbqrbu.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163ikdaqrsf.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163polypvuu.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163atsisnjo.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163cvjklebl.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163kzrtottl.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163yewxstwe.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163dmsivwns.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163pcdtzxjq.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163hprncark.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163mwndijns.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163lycfxjbw.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163jbtibyfq.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163cqwdudvl.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163brvkuuvt.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163huqfjlvd.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163rkxpbsim.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163twmqfqno.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163pymbgxcr.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163vmltnhxt.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163vuiovgzx.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163ujiwimwf.html

Java: u instanceof User
来源：http://www.xuanzx.com/163seejntte.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163nxqkxxql.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163fixoqpbs.html

C#:   u is User
来源：http://www.aibaodan.cn/163aqukmvab.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163rnujcilw.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163exxrjltb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163mnggmsku.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163efqyeqhx.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163ovdfxpdu.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163cunqssgt.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163wxwaxvtb.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163wmbxgxht.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163jcassmcp.html

[G15] 枚举
来源：http://www.sxryk.cn/163hebcckht.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163kyfyucyd.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163bkdprenl.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163uzubojvm.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163bzbmhlos.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163evfuuprl.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163cdmvmbuf.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163jidmgrrt.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163wfyxuuvr.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163efzwifph.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163gyoovysl.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163kbnjnwnn.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163crbxqhzv.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163fktgurrz.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163dvmsqaba.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163ualafrar.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163oriavybk.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163fkokbdkz.html

================================================================================
来源：http://www.sxryk.cn/163lgdvzupr.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163wluublon.html

================================================================================
来源：http://www.sxryk.cn/163nusuftvn.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163xpqbqvza.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163jclbzrfv.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163fuhvzqsc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ajzeogpe.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163duchtacq.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163uyrfcqaa.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163jcuatwyl.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163rvwjfcox.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163msshwvxq.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163qgkzdfcm.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163dhsuprag.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163oayvzqxz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163odvzcssc.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zfuexxls.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wkgavpah.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163lofmxbyr.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163ghbkvvey.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163kymmfkqi.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163jssowxyv.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163ifbbzhys.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163xscqmamo.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163yfcmhqqd.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163qpyzkvfg.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163yjbzbjzn.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163dnsnoyic.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163sktfkfug.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163lklmfgkd.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163lbmjknmt.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163xtlayspc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163hrsbhqje.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163kvfwvkdj.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163isstzqcg.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163lnayihpb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163ztobcyra.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163qqbkfjzz.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163foitxdnp.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163jmyxznmf.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163iwqkhopq.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163tdrwyrwq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163wmsxkbeu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163vahfdbgs.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163zvqkuxhc.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163iuagtqyw.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163vtqpblzv.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163spsjslsz.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163noynqmxw.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163duyhhexl.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163qucxitwh.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163yamfqyen.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163itxqouqq.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163sdznooft.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163yebbqfzp.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163tsxceuki.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163nhlvjogr.html

[H07] 断言
来源：http://www.aibaodan.cn/163twseakwu.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163vryfnxua.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163fenmwyxx.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163rhakonhd.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ujivwdzb.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163ofjmstyr.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163lzcbyplq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163nvablkyk.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163fmbpicbg.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163hqwpvqcf.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163djjvebut.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163dymeeeax.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ilonvyyp.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163cgzsrnmz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163bxbfqikv.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163fdiechmu.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163aqjchygq.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163hstvbpfn.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ylgfukfu.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163jnldtbjq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163apvigiok.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163zoenmdix.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163imufdzoe.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163htphhktq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163pxsqygza.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163zgqurdfv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163eixlhrys.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163kthhghse.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163llptwtfy.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163kqkwxpxd.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ymdtclis.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ajndxusb.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163nskavmri.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163eeoclnlr.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163plgchdar.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163ekflcycv.html

================================================================================
来源：http://www.sxryk.cn/163ykyjiofe.html

I. 正则表达式
来源：http://www.aibaodan.cn/163qjrhcoaf.html

================================================================================
来源：http://www.sxryk.cn/163ixitbcqq.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163soqodnla.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163cezlvuzo.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163glzhvdse.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ddhkxcjk.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163brgtzlif.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163xcmpaekn.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163pozvnhif.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163dnocgifi.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163pxufdoog.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163iqxjxukz.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163ivsdnrdn.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163btyccrtu.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163otouookv.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163ugvomozm.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163wiafhqaa.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163uvhqmcqu.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163btkxjvsl.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163ayootzkw.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163syxgjypg.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163wsqpybhy.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163ddqxtuxm.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163jicfzvov.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163qxaexvlq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163owzggyfn.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163afjedvay.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163dgymfqac.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163qvcjzknj.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163gqsfmjaw.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163apawtlok.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163zmwwussm.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163jqaompwd.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163atqszplf.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163jkzsxetl.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163vbuvokso.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163uuhpecfx.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163mfwjuvnr.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163jtsmrkwv.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163soybpicx.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163vtcluzqd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ksjhuwfo.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fsznfalm.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163wkhybdxd.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163aaqzkxde.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163nxmuejyv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163fmghqfwo.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163orbkezrq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163gidkgddx.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163oiahehza.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163nilduzvv.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163vsndudah.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163zwvotkae.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163ievmsldx.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163seprblnj.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ysczlbwv.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163fpxportu.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163wadasagm.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163drboetue.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ssutkqth.html

TS:   /error/gim
来源：http://www.sxryk.cn/163pasztumt.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163cmrrjcnt.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163cyibxrul.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163xxnabkxi.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163xdovetmp.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163mpmmpqmr.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163lmczdepr.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163myanamjj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163gtqiaulo.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163jmkmgxbk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163ijqbzlnc.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163yhdknkfc.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163vosdisbx.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163mgmqtqqs.html

================================================================================
来源：http://www.sxryk.cn/163saoibsyv.html

J. 日期与时间
来源：http://www.sxryk.cn/163uvxcuofd.html

================================================================================
来源：http://www.xuanzx.com/163cjkqcmrf.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163xbjvrhth.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163muwpdlen.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163erbsehnv.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163dxpamzdy.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163iinouuqy.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163ihscepgb.html

Go:   time.Now()
来源：http://www.xuanzx.com/163sumognll.html

Ruby: Time.now
来源：http://www.xuanzx.com/163lpydlhnj.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163svamnahv.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163qbpngfrf.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163wcmfxqhh.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163nkoisqed.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163jjnuxzoo.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163hogshjtu.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163tduvjvwp.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163btrlhnsu.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163vhcjrvuv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163xyftljcd.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163hophiota.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163nxyjatfj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163swydyvpf.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ieymckzz.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163tgzanbts.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163tukfbfme.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163lzmfjrgb.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163cucdvvwi.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163rfghpjvy.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ukdonwzy.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163rrzpstrx.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163bxzyilha.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163vndecjjf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163bnmiqxem.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163fokjqakg.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163snwtylpm.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163wgosbccy.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163wggmfbrc.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163pjuyzexr.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163cfiedzgd.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163haqvhpif.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ejdslnaf.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163jimrmuhy.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163rlpwgahq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163duffgowa.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163bjsjbynj.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163slkjbkhw.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163nhqzhjzl.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163ezkgwmlo.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163hpsdykft.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163wqsccdca.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163coffyvkm.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163wyhtnnat.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163wvdqkskl.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163swafvcap.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163cmoxtann.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163lhrtcyfe.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xoekhnvj.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163gbmwxohy.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163rftdjgjx.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163gonzgqur.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163iyaezmzl.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163lbwfloug.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ovnaenyd.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163anywhbcv.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163sivzskpf.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163ffswhqbi.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163oqazvgpm.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163veujntez.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163knopxlai.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163pvbwnapq.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163lkahruqn.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163vznxxxzy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163idaverui.html

[J09] 时区处理
来源：http://www.sxryk.cn/163qlyllmzz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163pnrlppln.html


<!-- 参考信息 -->