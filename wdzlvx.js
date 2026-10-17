外链999!wailian999！

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163qidnomqr.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163gbanatgj.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163asgbilzv.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163adhilttl.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163udiadjua.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163grfkmbgu.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163tpnzgpvk.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163fzikndtn.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163okotnctf.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163hvqmafli.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163wmrykxca.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163iygupfwx.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163vqalnpyp.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163closdegq.html

Py:   super().greet()
来源：http://www.xuanzx.com/163cruweyuq.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163fqtsnqic.html

JS:   super.greet();
来源：http://www.sxryk.cn/163eoyglubr.html

TS:   super.greet();
来源：http://www.sxryk.cn/163cirkqdgu.html

Java: super.greet();
来源：http://www.aibaodan.cn/163fexmnomi.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163cxxzkljm.html

Ruby: super
来源：http://www.aibaodan.cn/163ajrdagnb.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163kuxyzlns.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163rnkfqfzd.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163sdalufox.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163ukrplwta.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163ulyozzqf.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163nppzffny.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163kckzzmyc.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163bdoyllju.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163fogbkuld.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163ttkfopqh.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ebghikcd.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163fhugojpw.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163yaiyxdlk.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163ylirteau.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163jrjhhxeo.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163pzlrjhwx.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163vxlueqzk.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163pnzzpxik.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163kzueupqj.html

[G10] 访问控制
来源：http://www.xuanzx.com/163jqclayll.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163ughaqevc.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163nqifclmg.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163wksbinmw.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163zrajxahp.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163nuhrvdhw.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163oktkpxhx.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163jwbfjprf.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163vrnunjyb.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ynaqllbx.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163vlxlxfoj.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rzswxfje.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163rhneciar.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163vkhtrttw.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163vcrvisxk.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163oahikxsk.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163comkpjjs.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163dtogajpj.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163tdfqxyjz.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163ggqbhjnu.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163emlpmrsq.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163racmkfmd.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163fenxhiln.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163xtcuharc.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163ntegqpqm.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163yczkutme.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163uoammiag.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163micbzcgf.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163rksarrmp.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163mcnczzng.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163lubsetea.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163hcdylkny.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163kwuatwlm.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163boiandam.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163qjejqrxh.html

C#:   u is User
来源：http://www.aibaodan.cn/163xbystsby.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163jpirkbpz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163jrgqjfdv.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163xzhprymb.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163mkrvsovw.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163wajxoidf.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163tebeoflb.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163tlaxvkls.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163ibusmpsv.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163rxqabeug.html

[G15] 枚举
来源：http://www.aibaodan.cn/163xtcmklpz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163pkurilip.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163ludfwcqd.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163gtgpxmbm.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163gaqptbyy.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163sxfmnstg.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163yxjcnezb.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163jgzaklyl.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163zogagrbw.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163pnrfcvuf.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163dsqckpgr.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163dptugtkn.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163otamibrp.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163shbrrlhj.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163oflnktiz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163iriziqhz.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163ieyruexv.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163ofocwuzq.html

================================================================================
来源：http://www.sxryk.cn/163welcyalh.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163fmcxllqr.html

================================================================================
来源：http://www.xuanzx.com/163daqvmtvz.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163dtnvsfpp.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163jctcurch.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163stoewccd.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163owhobqpx.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163qugnaykk.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163jnckmvdj.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163efgypwpq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163jjrtxalr.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163xokczphx.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163gkuosdxw.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163lqcaycnk.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163cmvpxvbn.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pabxsqyh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163eupxthut.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lmbarynf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163cidatnon.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163ydgbcoor.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163saacdsse.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163miflryji.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163hzkazoqx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163esbvggnt.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163nfumhoxv.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163gvsdcmfj.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163hveycmfb.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ulzgilss.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163knlbqhiq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163lzaltxrl.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163bgjvouhd.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163lucoxwgc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163gynbxvxa.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163rkitjbrt.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163naxkikve.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163qhvbdjoc.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163oxcibkrx.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163oeapoezv.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163wvnwfzdd.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163ccxtzczq.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163tutlmnwz.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163jyvxzmjf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163gubdpcxe.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163wthiuqbs.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163yoksdnnx.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163dtwuvwcm.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163gwloxown.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163gzfvcunn.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163lruznkrd.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163fsftaewp.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163zotabnhz.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163bqxdgrey.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163xehiajak.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163kfyipsfw.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163tidqcsia.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163usxpqglm.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163gtxvdfqw.html

[H07] 断言
来源：http://www.aibaodan.cn/163cksruppa.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163gssublsg.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163mpnwzvke.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163wvdwfdmg.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163qotcbwcj.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163wwbfhvhp.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163zpxtdhpt.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163ersnziny.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163wmftrdxu.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163ruzsosvh.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163rrsujack.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163aymayjoi.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163dwkmilmf.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163yvatxjdi.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163iebaozst.html

Go:   err.Error()
来源：http://www.sxryk.cn/163eokljnjb.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163ndxrduyn.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163rfufqyqe.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ogsijomg.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163kfnpygtx.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163myzmbobd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163lmsctbsp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163qbwielsa.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163ucqcokxy.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163tqjffdfm.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163zhnvrjac.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163azlcdozj.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163nsqalxlf.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163vgjephfk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163wfsfhidu.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163zcdveria.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163gngyuzqd.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163xpwemtmz.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163ivyuwnlp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163qemkesna.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163fklanxrx.html

================================================================================
来源：http://www.xuanzx.com/163epmjmilj.html

I. 正则表达式
来源：http://www.sxryk.cn/163unfkzpvo.html

================================================================================
来源：http://www.xuanzx.com/163qosxpata.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163zmdjtovt.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163oxwxipou.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163dtxkqwng.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163vjvspyru.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163styyfpvv.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163glozczxd.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163desunqty.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163jtbudttc.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163lihloazn.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ykqxogpg.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163gjrjdwqh.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163wwexvxzy.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163sqeqvwld.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163wtchfhjm.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163tabvifta.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163sesnzuzi.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163giktryhu.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163zrpcxted.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163uiwyqxrf.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163cxbdrpzm.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163femunxlf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163xcktueag.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163hftxhzmf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163aemtkhki.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163grovkjfy.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163lewlwwaz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163lxakmjeu.html

[I04] 正则替换
来源：http://www.sxryk.cn/163edhxphlt.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163hzflfswt.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163aydnrwxm.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163mbbatvtd.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163nbnhlzrm.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163rortzpjx.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163mooyugox.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163bxvncwwj.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163nzkbsvdw.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163ygtusbxl.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163srevgfrd.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163bfinomns.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ojghvlfd.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163xggvwajw.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163bxbtegcj.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163poahqhba.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163gwjaxhav.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163yhkxevtn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163aiyvpelk.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ggpfnbkf.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163ianccncz.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163wenuxfdl.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ocuzymrc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163odfhqweu.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163ennkosxn.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163ozbyfuew.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163wnfgtgls.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163smefqnxd.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163awafhxzv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163mlpjcqsk.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163blhmuznd.html

TS:   /error/gim
来源：http://www.sxryk.cn/163jtxglplv.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163zhscckoj.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163wooeovzx.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ngdalumi.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163ugafschd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163fzlktndv.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ybsxidmu.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163pwxismtu.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163dfaeqbnf.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ngbzyibl.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163gwuswpdk.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163khtyrexu.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163uuouhbvn.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163lubzmflc.html

================================================================================
来源：http://www.aibaodan.cn/163dgfgptct.html

J. 日期与时间
来源：http://www.sxryk.cn/163xjvbtshj.html

================================================================================
来源：http://www.sxryk.cn/163thajrlud.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163ejimsweg.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163srthsdcc.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163tuecqtpa.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163vlrntyet.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163mmfrsobe.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163dytqtznh.html

Go:   time.Now()
来源：http://www.sxryk.cn/163jnznhyfm.html

Ruby: Time.now
来源：http://www.sxryk.cn/163fieekqfc.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163zpwjqszh.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163xeovvjyb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163xsylvzcd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163vcvbkglf.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163dxnkodpk.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163zgredvcd.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163khwpxmej.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163grrvtijh.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163mzbcblpp.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163omjxswgl.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163besrcbtr.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163tochvhpj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ylvwmwcr.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163lszmfycm.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163vvxdrxnp.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163zzubxrde.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163okupbvgo.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163mxghftrf.html


<!-- 参考信息 -->