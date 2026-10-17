外链999!wailian999！

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163oxqaychq.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163pzmqhjde.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163eyhfcmxw.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163znoctayt.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163tpkzojtl.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163pqsuidbq.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163hpfcteej.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163myfgidcr.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163towozfvk.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163amnchqdx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163njbdnscv.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163evvpawpx.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163xjrwokym.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163scvnuqcd.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163gidrfezr.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163elvpfqxm.html

JS:   super.greet();
来源：http://www.xuanzx.com/163svmmksfw.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163isltjvkr.html

Java: super.greet();
来源：http://www.aibaodan.cn/163jgognvgl.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163kissaapk.html

Ruby: super
来源：http://www.xuanzx.com/163qecnipzn.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163hprblltc.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163hpybjxba.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163udqcsatz.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163xccutpyq.html

JS:   static f() {}
来源：http://www.xuanzx.com/163tgqchksh.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163hvxhhvrl.html

Java: static void f() {}
来源：http://www.sxryk.cn/163xogarrut.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163iwymbqzs.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163gnwfnhty.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163liuzxvew.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163pbbsrgyt.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163gxshobue.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163fdqpfawe.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163avrsmkyr.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163crofzmhm.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163orcifxji.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163zudcsxyn.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163ehyvtytt.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163kyclhcvj.html

[G10] 访问控制
来源：http://www.sxryk.cn/163vkgfpuxo.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163upuiudmp.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163pftieysi.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163uhrpvvei.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163meesfzbw.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163fyfenjoc.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163rqotqgin.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163bwqqjtee.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163crunlcpb.html

[G11] getter / setter
来源：http://www.xuanzx.com/163zkpyamtf.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163fbiorbat.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163mhsmczdj.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163hyqwdseo.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163etrjlaxn.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163wndddlrr.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163nwkkrcvj.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163zmgkbkmi.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163fsssmsvt.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163awogjmtt.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163rerexqjm.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163suzudrts.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163setbhyjs.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163biygdwif.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163rwjnkjji.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163fgnfvnpw.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163tymocfgh.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163uyvelxwe.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163nkjjchdn.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163nmyhsabc.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163tlvnhzhy.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163pbpnaitq.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163ksbywuia.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ybwtzjqa.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163guofqvhy.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163dmsihogd.html

C#:   u is User
来源：http://www.xuanzx.com/163zlhwtgwh.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163zwtwejsi.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163tjgtkoqn.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163zfvuvhtl.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163aqnbuohk.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163gkscbcyu.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163wklzljfd.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163urtwdedn.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163hwcdeidw.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163wrlztsci.html

[G15] 枚举
来源：http://www.aibaodan.cn/163scejhacw.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163dxeodtdh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163jbnbgrkx.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163opndiqsx.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163gvevqruj.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163lbbsidtq.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163usukcoqx.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163atghdqeq.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163awfvdiql.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163fujxtglk.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163okalldes.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163fhdndkea.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163qdqnzvlz.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ffqjqdzs.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163kuqgptdm.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163cvusfqaq.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163buuyfxvr.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163zdjuyntb.html

================================================================================
来源：http://www.sxryk.cn/163sfmiwraf.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163sggtsxat.html

================================================================================
来源：http://www.xuanzx.com/163fuumlkpw.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163nfuwfyvi.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163lgeoiqam.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163pbgwftmr.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ozjiwclv.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163nsdkhikf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163xntulkgm.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163zvvbxzzp.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163moybwbfj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163prpddgff.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163yiryqmxv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163nzeozvbx.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163locdhedq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dlbpcayn.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ojjsltut.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163yagkddfw.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163aiwxovle.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163xvbjbcsa.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163uidydxbv.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163fsgfzmmr.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163hzjaicyy.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163yumdlvqg.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163llxmwztu.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163flgwhqpt.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163jjmacdlu.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163mylesmsh.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163owndwfil.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163csaymryb.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163llgwiinq.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163pqpwoqit.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163vzrphjlv.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163hdkqmazp.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163chitgcmx.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163laltylwk.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163ifywvztm.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163gvxbtoem.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163asdtzzsc.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163wbcjqwoj.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ayrjhrlp.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163rmidoqix.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163potopkur.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163mfcilwwc.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ldyxrrpp.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163spilawux.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163mdcmwdve.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163jtybjynz.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163evbyqqjs.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163wlprxvwv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163okeaanfg.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163aucorpvd.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163jsvujgkq.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163bcdoparq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163lffoxakv.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163feelyvne.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163laihlxjz.html

[H07] 断言
来源：http://www.sxryk.cn/163nnkbxbyy.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163fmmoavjs.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163ochsndnx.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163izwkqiud.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ljnyqqii.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163hrbpdtlm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163ugvcvjkw.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163ypvbqpvj.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163mgapuhoi.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163ifiimrdh.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163vksyvqcr.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163gkmuivzc.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163eazyuzcu.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163lzoshinr.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163cagoqren.html

Go:   err.Error()
来源：http://www.sxryk.cn/163ofpnlfsg.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163xinprwbs.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163tghnbabc.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163goqmbuic.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163lfjnnhgw.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163cfyefyqw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163jafrqfdl.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163ncoqrjhz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163gefeebii.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163ffeeqkvx.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163ypfvxfta.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163ybboctua.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163towfdkkn.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163yhuuegod.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163gsrqodjx.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163cnqvigrx.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163lalnxjio.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163hswskokl.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163clphelcd.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163vlmmyzml.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163jgcydhlb.html

================================================================================
来源：http://www.sxryk.cn/163vugbtwhv.html

I. 正则表达式
来源：http://www.xuanzx.com/163kdjtpuuo.html

================================================================================
来源：http://www.sxryk.cn/163sbgrraqv.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163yyfobzwp.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163befcgkih.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163rdynhyzo.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163bqxwshai.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163siviwqeq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163aawtdqyv.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163datkvxoo.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163aphbvkrg.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163dnselmtv.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163jrdhcllf.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163htxymrmg.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163njsmjkhk.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163pigvszmq.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163kqzbsdtx.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163ofvlnjbo.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163vqkmeoju.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163uvanjvbr.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163xmxtxkzd.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163fwdeyypa.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ysdiwtev.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163gfhmvxqa.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163kgcfzpgi.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163gtjwjogq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163prlsmgbg.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163xtmnlqvw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163xothnypg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163vrgsbfyh.html

[I04] 正则替换
来源：http://www.sxryk.cn/163knoimiho.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163tjnymmrl.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ebpgyjcn.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163jnzblzhl.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ruphisqk.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163xyiihzjy.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163amohpkud.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163sjwroyrl.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163vdmflxkr.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163olrrhfok.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163tsmjbxas.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163ygicykuz.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163vzuersps.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gvranoal.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ttiyndrs.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163lnrvztul.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163egkkuboj.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163fikbxbat.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163pikcoptr.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163lbmidmya.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163kswtqwsf.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163jhyqrolz.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163eytycpxb.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163xxbzunus.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163ssufkswc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163drbdpcfd.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ayjgopox.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163gonkweel.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163asjfuumu.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163maksjpvj.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163udbaplkg.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163jvvrpulz.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163pmxugdsq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163dgxpmpnf.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163nylsyzim.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163rpbnjcdo.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163zpvqlcoh.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163ultvhoof.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163brrvonyp.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163aagsmaix.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163bhbtcbno.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163jwiuwnnd.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163txfldray.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163ntlzbwyv.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163nsfcyjse.html

================================================================================
来源：http://www.sxryk.cn/163sluqltek.html

J. 日期与时间
来源：http://www.xuanzx.com/163szhgggnv.html

================================================================================
来源：http://www.sxryk.cn/163jofincru.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163jrtvgvxt.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163xpsgenfe.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ljxztvda.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163qocanwwv.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163iboolntg.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163xosyltkr.html

Go:   time.Now()
来源：http://www.sxryk.cn/163txqneezo.html

Ruby: Time.now
来源：http://www.sxryk.cn/163whjeryfu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163fuzrpztr.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163mddkqwsk.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163bsguevlr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ugtjfthn.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163ddlvwekx.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163ullototf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163wtglngqz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163yafcledv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163aqimvcuv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163fyszbzou.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163slpwrprv.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163nsyclzej.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163wtqkebrq.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ctlrjgek.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163cfcnsdwe.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163bcidlfjf.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163fydtjiwl.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163cootyfis.html


<!-- 参考信息 -->