外链999!wailian999！

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163jrhnxzyt.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163xaftoxib.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163hpuykrqf.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163mjpjxezt.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163rjdpzejn.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163ndtwwsfg.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163elqenhwj.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163zcdpteqz.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163hamtxsxd.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ukkpczdu.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163woznjxag.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163fktbcbba.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163pqggjmtm.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163zromhzhv.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163qzanxsrv.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163pbpplvnx.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163jtqhmpbf.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163xghlzegw.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163peaooall.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163airxntwt.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163glllpwdd.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163uhyxzhtn.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163zzjqoxru.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163ddljlstm.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163pdpqiqhj.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163gyxikncy.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ganxhfgh.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163vlcdoexr.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163feddbxag.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163nkewwtds.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163nlqbenrq.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163qtfpjyax.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163sojcpeuw.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163uvlkivan.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163iiytmayq.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ohjwtjek.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163dpgdocre.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163hatkbmki.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163zarmycmo.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163askyjysr.html

Java: u instanceof User
来源：http://www.sxryk.cn/163ejzoqlaz.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163miealtiq.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163zlbusjkk.html

C#:   u is User
来源：http://www.xuanzx.com/163igjjehrw.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163rkucogji.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163vkxkbgyp.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163slndpzyl.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163ygeghrbh.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163guvvvzhw.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163bcerpkyh.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163okgaufys.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163whqyxtzv.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163nkuwezsg.html

[G15] 枚举
来源：http://www.sxryk.cn/163hlxofvyr.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163axrpelnq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163wubbaouf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163ebstnstv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163lvnljyhn.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163epbawwgi.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163oqrcizpi.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163imldjzrq.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163wvidfpkc.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163viibjuht.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163wefajaef.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163mpihddtl.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163aluawwrr.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163xakuzdab.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163mzunjyyl.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163vqwsfahm.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163abmvegcf.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163auhptkqx.html

================================================================================
来源：http://www.sxryk.cn/163avhtrcjw.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163mrjhlxhj.html

================================================================================
来源：http://www.sxryk.cn/163yuxmwgjz.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163oodslbwg.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163biajxkmd.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163peswstuq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163jyeekpil.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163gridsgql.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163wepsttsk.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163zlddncyi.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163qwenijgd.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163bnxhvbqn.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163dgzpxwif.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163qvxxostd.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tzrwqthq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ncjuinbw.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163cdxxbgnw.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163cwyzbndt.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163yqzapdds.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163hvuilhed.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163ekuzkoop.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163tflpeztm.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163tcwdbnvv.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163gdbujbeg.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163qxthgtiu.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163prktknhx.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163jomnclqb.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163mhezlnkk.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163cshpbuvh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163kbiginie.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163coewrewn.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163ymnpmlkd.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163bjhdbcry.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163wmnppljq.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163gdtwjpjv.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163jwvzdlvo.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163kjcofunl.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163vwvoghli.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163gsdrqcga.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163nksxuicr.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163mzguaioe.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163lpvzdqhs.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163loxzywwg.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163wprfltah.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ffrbkqxk.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163parrvxqe.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163pzojjafc.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163mcqahoij.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163oulbijej.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163aahsqigd.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163kkotwehd.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163rugfoukh.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163kgyxlcpx.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163qjakauos.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163yxxbtosq.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163ridephqb.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163xlvmgnqr.html

[H07] 断言
来源：http://www.xuanzx.com/163gllxqjvq.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163turxgqhl.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163lqsmaryv.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163afczmdxn.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163bnjmftah.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163lkwmpuzq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163furdwypo.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163beiokgjg.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163eznkwqhc.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163ehbhqhve.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163lsuwmdin.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163yvvqzget.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163mfqzmtta.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163raxlybxo.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163jgbiiypz.html

Go:   err.Error()
来源：http://www.sxryk.cn/163pynzbqpz.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163wfcoyunp.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163zcjrnjuw.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ujzjadqt.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163mdglkxsp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163ogugvigq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163rlcsnnlv.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163jugxlrov.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163xtjhelcl.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163zcusbxnv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163okltugwk.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163yberpohf.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163iawlaytb.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163yxlzikzl.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163atwqmqql.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163eucvchkf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ffskcukm.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163edzxntqq.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163gjaklrbk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163rtsinmkg.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163isulubvj.html

================================================================================
来源：http://www.sxryk.cn/163wspnrvwl.html

I. 正则表达式
来源：http://www.xuanzx.com/163uibvlpqn.html

================================================================================
来源：http://www.aibaodan.cn/163aempelml.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163xscfsmej.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163ecpekqgx.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163ekiykjed.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163hjvxzhnz.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163tqpsdpoa.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163mfpfplio.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163oswwqeht.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163sqnadybb.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163cgddxjuc.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163msjfdztk.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163pcvatjch.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163sxqrbpqm.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163lhzyoche.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163vjzlkpmq.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163fqcgxaxn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163waoghooq.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163jdknqsez.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163frdaoohf.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ywpswhmu.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163omyvfiqp.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163fjgfcwlm.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163cxmjpuzm.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163fcfpizae.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163ckeionzw.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163qxpfidrg.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163rdfeixtb.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163zeqdeeva.html

[I04] 正则替换
来源：http://www.sxryk.cn/163iwkfxqtl.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163upqnozwm.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163sxwdcdex.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163xubwqchd.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163wptepsoo.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163svujvopd.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163thssacuo.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163cxbgpsit.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163upxoulgb.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163lnnoumom.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ionmxhds.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163uqngdwvg.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wknjnzuj.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163jnmbzpyh.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163pyettfen.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163crdgvlud.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xahuyfec.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ptlosnvn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163ypqulfvz.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163seqsoknw.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163asnytvgy.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163fikmbhag.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163jbmigcpm.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163tzehihti.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163krugpgqf.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163nmwmckjj.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163zvawxqlu.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163utzbenfa.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163utldzvie.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163dumwzydn.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ljdedqjc.html

TS:   /error/gim
来源：http://www.xuanzx.com/163ckisdokk.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163frwfvfpp.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163mdqjmepx.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163yfqewalf.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163zdkxznni.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163zgyvtumn.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163aihhgrnb.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163ozlyvitb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163cxehauzc.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163optipihv.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163nyyoltvr.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163pbjepgzc.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163novkhrcv.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163ighyummz.html

================================================================================
来源：http://www.xuanzx.com/163vjczlddt.html

J. 日期与时间
来源：http://www.sxryk.cn/163kjwdznbh.html

================================================================================
来源：http://www.aibaodan.cn/163yjoesjpj.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163jerjgwtm.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163huxzlpzz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163otmvnvrq.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163bmlkxgfn.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163imlvpwkd.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163aaxmwlce.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163ohpucvlt.html

Ruby: Time.now
来源：http://www.xuanzx.com/163ywgaxbmg.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163acwwvfsl.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163jiilkfcv.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qqkwjubw.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163gowgcncb.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163dclpfkuy.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ntavdcbn.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163shvfzkxs.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163pyocyljy.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163wpieiywj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163brtrhsys.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163nrrnpzfs.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163gjmcvwjg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163brfpdkom.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163jxfqekqx.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163vdxvoxid.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163gmvuidtt.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ehclhxqc.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ukhwcqwh.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163oauiuhab.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163yatknsdf.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163arsslgha.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163srtgfxza.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163dxejaqmn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163xgugfsoi.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163ifvxgxae.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163boinydur.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163pobxbxri.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163pemdjfuy.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163tjdlqpdo.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163kzvkpqnb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163uzdrggou.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ubbrzqse.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ycnvrgbz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163dusvujgm.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163jnamanmz.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163mtuulnue.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ehqnaabf.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163rmnafjgh.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163xxyipuzs.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163purxweia.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163gdiedlss.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163xtsyeqeu.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163nwyhtlcn.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163wdhpeqzk.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163qwfroeoc.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163zoueylnb.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163chulyybq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qbmbtwhy.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163iytlikat.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163iwhcbcvq.html


<!-- 参考信息 -->