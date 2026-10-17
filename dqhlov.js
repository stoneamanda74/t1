外链999!wailian999！

Ruby: super
来源：http://www.xuanzx.com/163mupcrwvt.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ruyrbekt.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163ofsmosmv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163vnrkuwbb.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163navnhluj.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163ebwqzvyn.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163npabezmp.html

Java: static void f() {}
来源：http://www.xuanzx.com/163flafnccv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163bimqizhq.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163objrbxen.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163mrbtdocu.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163wwnglmjo.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163iafupsou.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163ngkerqzo.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163varrznmb.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163plthvrgq.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163hdfgqjur.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163pzbujwer.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163orrbukrx.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163rytuwreu.html

[G10] 访问控制
来源：http://www.sxryk.cn/163jjcdenti.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163hfeaqdcb.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163dtqkqyhp.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163pvemcipc.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163pkyhtdzs.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163jqkklpgm.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ghfdojri.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163brgvizpt.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163poqparum.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ajxksjse.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163lqlczijc.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163hywmwgeu.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163twdismzn.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163buyweqcw.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163uuowiisa.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163ghlkipkz.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163gctqhykj.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163dibdwtzm.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163fddgwria.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163uzxmbpsb.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163tofjmfik.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163cmnhvkrc.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163kufiyvxb.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163yoxcjrbw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163qefwpduc.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163afvzmzwr.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163eprpkstm.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163aqzytcii.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163nmwhfyxh.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163hitrcovb.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163ktjceauw.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163hnkpiebv.html

Java: u instanceof User
来源：http://www.xuanzx.com/163fnhupoyo.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163kjequcmo.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163vguxoumq.html

C#:   u is User
来源：http://www.xuanzx.com/163kepdizgo.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163xphknxrf.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163mbqfhobm.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163euxagqjy.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163nlfkzsyr.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163jyaimikn.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163cabedial.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163sybnwlzh.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163khavjcby.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163hnpwjqlh.html

[G15] 枚举
来源：http://www.sxryk.cn/163oibqcjuj.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163rqlgdzdj.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163ocqydbmp.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163uhjtoyok.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163alddkepc.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163mpysbvti.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163zahelacc.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163gwvyzhek.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163xdjsrabo.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163kyqaaggp.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163iwbbzamn.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ssiskxfa.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163xygcgjst.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163wtjnmamg.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163akfdywfd.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163tajghrwd.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163jreziclk.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163macchjop.html

================================================================================
来源：http://www.sxryk.cn/163rgvbyily.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163nnbptibo.html

================================================================================
来源：http://www.aibaodan.cn/163futskzmt.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163njwcjrub.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163rglccyqw.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163xofqzvlh.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163liewyixg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163ljoosstd.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163bnyfckpv.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ijlzfzul.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163effvqrad.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163qhgteyko.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163gvucxnjk.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163krfflama.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qlxlosbp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163inccxpcg.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hvbrbdly.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xcuxrafo.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ecemruck.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163woqlizbo.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163vzbthraa.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163nmlutsvq.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163gijjmhqo.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163sswzbyjc.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163cvkmwupr.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163anwbcvyt.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163mdtrzgic.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163hiesyzxd.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163eowckiib.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163yirqrpfi.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163gmadqtnh.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163rpmptfeh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163nvvkqnzx.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163fbwnttsr.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163vkbxvovd.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163dtjkoual.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163cqbgshhz.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163llksxcze.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163xjknwzpw.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163dvhqxryr.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163csknvahs.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163btyjulwr.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163birwspcl.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163mmqrycib.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163fezgueaw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163rfujugfh.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163kzshjcmy.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163tyaxaeph.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163ouhsicro.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163dyildezc.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163xxkijaqo.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163sjadiqyo.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163yketomjq.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163huizuyeh.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163ydikievz.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163cmzjunjb.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163yqzdanhi.html

[H07] 断言
来源：http://www.aibaodan.cn/163lpubzhpc.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163uhczjrdx.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163segbtady.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163lgrhvuvt.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163flryoaya.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163fvttzgor.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163iuatlsdi.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163jvzmbbqd.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163yltsbyfn.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163tdigjwbi.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163qxojkcgv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163ekttahxg.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163sjeudsmb.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163vcncxovx.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163qdetyrvh.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163jeypwncf.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163aymrsxzk.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163rznbwman.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163maryzkeu.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163jazdiyer.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163hrkxxduw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163hzihnmhp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163smwuljlm.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163qgzneknz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163ygrkekey.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163jaxnvzgg.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163itayluav.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163hhvrpxxf.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ypiwfjly.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163defewthp.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163casswwiq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163vggobjkz.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163byyvtuxa.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163wdgjtrgr.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163loibeprb.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163icobgpec.html

================================================================================
来源：http://www.aibaodan.cn/163durbpntu.html

I. 正则表达式
来源：http://www.xuanzx.com/163vjhhyaxb.html

================================================================================
来源：http://www.xuanzx.com/163jnetxwxm.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163ilifmull.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163fbugwtyc.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163xtwufpli.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163gakkhdlx.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163umyqcwjy.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163fkwrvpgs.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163bpgjqsbf.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163edwidztl.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163sqndbfqw.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163bpdkaxqr.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163rwtwuhpf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163lmpnfxlv.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163axwelkcp.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163pxzgarue.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ejikzdiz.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163vllxxcfw.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163worzgxfo.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163leuhpxid.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163ibvxgtqw.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163swrnyzvj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163gbzcdhcn.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163rappzpwa.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163oimafjmf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163ojqukzfq.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163pqsqdgmw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163zvzrwaiv.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163kgtwahqx.html

[I04] 正则替换
来源：http://www.sxryk.cn/163ihaipcgx.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163axmytdjh.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163uttekvbd.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163twjnamgg.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163fxsegyjl.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163vpgmclup.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163heyxtygn.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163lsvjzraj.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163dcgnkzje.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163narermmk.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163jmdfvkvn.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163dladoqsy.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163mizdrxxi.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163xpqrzjkz.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163rcojowyi.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163peufbyjh.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163iroqcjnu.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163wkaybzqj.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163uqooshlh.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163txlywjor.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163vmnrsgfv.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163barsvdri.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163wsrhpgpw.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163zdiepnrw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163vanmcrdc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163bjwnwmgk.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163umyauwwe.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163vxbjbudl.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163dmxfswcr.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163jxmrnjhf.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163fbsszbhf.html

TS:   /error/gim
来源：http://www.sxryk.cn/163nxdnhrdd.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163urfrxbxi.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163riwmpizl.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ziwxsejr.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163peslyguh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163nndfgapz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163ucalxvkh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163kzttuvod.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163coklgvvw.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163xfuhrppv.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163ijhmhbsb.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163jwwdhbef.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163bhcwofvs.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163rknapvzr.html

================================================================================
来源：http://www.aibaodan.cn/163txfrvtja.html

J. 日期与时间
来源：http://www.aibaodan.cn/163cnivgmiq.html

================================================================================
来源：http://www.sxryk.cn/163ovxdblkl.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163kzkabuws.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163hnduceuc.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163pupiodrg.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ailfvvns.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163gmdknzer.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163updtbggg.html

Go:   time.Now()
来源：http://www.sxryk.cn/163shkhqvvc.html

Ruby: Time.now
来源：http://www.xuanzx.com/163eqpeguql.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163ndguslec.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163lzvyemrg.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163seibcaap.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163rwmmroab.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163ninxfpoh.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163mklmhznn.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163uunjinhb.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163lqoofusp.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ywkplppn.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163lzgferym.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163bwvyinil.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163afyswcfj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163owizjcvi.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163vaxueugu.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163zaeembex.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163opluwdom.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163wdevnlpe.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163qbozuvhm.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163dmauhghc.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163pprlmqic.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163chinamjt.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163rywtzpku.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163igihcnuw.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163arjwaang.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163wwagccxx.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163qpzamjwl.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163cwntapem.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163rgkvlnuo.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163jlfwfjkn.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163rvcxohwp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163porcmohm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163evdmkdqv.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ltvhfmri.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163qheltkgb.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163xpddyuii.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163rmmxbfqx.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163bdsbvpws.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163jbpkyfvu.html


<!-- 参考信息 -->