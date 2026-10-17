外链999!wailian999！

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163wqaynhbz.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163fkopirdl.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163ozkkxknh.html

Java: static void f() {}
来源：http://www.sxryk.cn/163yoakkydj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163nxjfwpyp.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163udohpfaz.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163grrprvkr.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163viettajt.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163fhzjnfso.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163opcuhkiw.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163xnmqvmre.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163nwydgqcp.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163jwltoksb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163zctarrut.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163bggmivmg.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163zyumcblm.html

[G10] 访问控制
来源：http://www.xuanzx.com/163ydircsav.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163ftaofavn.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163znypghot.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163kscoicib.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163qnahkpty.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163vzvoqxpc.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163rkndgxim.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163kiqxtgjj.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163igirgcyh.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163qdgufjcu.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163ikovmrlb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163chmshadz.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163dihqsbqa.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163zmoixigz.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163xoaarhng.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163cijdfsed.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163hocnoycp.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163tsdawkfz.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163fhpjwrje.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163zoaivnlv.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163mrrglirr.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163hrzbnjuv.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163manhjrwn.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163nzhxrgtx.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163khnmjhar.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163xsshmddc.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163gmomgmou.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163nhrbfjnl.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163blnwjgob.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163irkyekzt.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163jqevqrvw.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163vpijaguo.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163xmskqglj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163grwrreno.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163wbgkbojs.html

C#:   u is User
来源：http://www.aibaodan.cn/163zpscouku.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163iiigotel.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163ynqzsqru.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163bdzlkvyt.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163zcygrmqg.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163gdosavzl.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163fycbidnq.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163rufpmnyz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163witxmwth.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163vdiovhdi.html

[G15] 枚举
来源：http://www.sxryk.cn/163cjvyfykm.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163jwlhhika.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163fcsgzznz.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163dodtdacf.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163tvxtsmch.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163gckxmall.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163brqyfmpm.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163zdjirndd.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163pdqedwoy.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163eioxnrqn.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163zptgeuqo.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163abvrbhuw.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163toawcnnd.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163hhdgajqx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ngkndbym.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163vtnutvey.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163jxaonozo.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163vsrsbpru.html

================================================================================
来源：http://www.xuanzx.com/163lbrydunw.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163cdtvlbrv.html

================================================================================
来源：http://www.sxryk.cn/163ajsefbji.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163wiuwhobl.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163byuojomf.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163offwhqaz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163hdvbpnsa.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163nndujgdf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ildiyjzz.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163qcuaqbfy.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163pfcfweqj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163uuywimon.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163hpuchrpn.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163khnesgeq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bjhhnfcg.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nlygpwby.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163yhmbaxfk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qhbhmykh.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163sresahab.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163nirahzkb.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163ltfuzfft.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163edgbjygx.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163ljtzsjcm.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163fxacxhqt.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163synhgclh.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163sutyxujb.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163unvaehcb.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163dvzhclsh.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163jduskkpn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163xjtrnrir.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163kqkbgadx.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163xeqrnrmo.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163gprxtogy.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163xdepdchn.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163hfthhasu.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163tguauszp.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163jqfuufap.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163edzegeie.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163nxikdfqf.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163aziolecg.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163fykavqob.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163wuhrixek.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163uzmcopjn.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163yulkutbp.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163zspheozl.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163jyvjanko.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163tsfxyuao.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163juspnpou.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163cdodeqnh.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163ckboipxc.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163uvpjttjr.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ssbihqri.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163nlnklkhh.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163azeqswat.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163sbtshgwm.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163jvyyzfxr.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163uvhudscz.html

[H07] 断言
来源：http://www.sxryk.cn/163zqcibujy.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163evwnxght.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163qkbprhwy.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163scvlwhef.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163jvtmidvc.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163lrbihyux.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163ficgpgbl.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163kmzbwyky.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163fewshdzy.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163abzpoeiw.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163dbuigydg.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163msfsavht.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163qcfjqjcl.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ohwrgakt.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163qxhhyvum.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163gtrywuwm.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163jikuopaf.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163ofnuzcmg.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163lvbnqnya.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163mhvvbxif.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163kwngzlpu.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163tqgebsbn.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163vnhasfex.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163spghnjcj.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163osjpfbpb.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163gvtrnbko.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163dqqlucfl.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163ttjfgcei.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ovmcjwhy.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163rnealhgw.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163qajpzfse.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163dtibmdjs.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163jvvrikrg.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163qdxmmyby.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163yiwurafx.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163sngyxyht.html

================================================================================
来源：http://www.sxryk.cn/163osgvoiqd.html

I. 正则表达式
来源：http://www.xuanzx.com/163cwdcmtgd.html

================================================================================
来源：http://www.xuanzx.com/163oncfygal.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163jcdfnfps.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163ubblpoii.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163crdldjcu.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163awnlliqn.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163aioysaoo.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163bxtbxtwf.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163amdfdioa.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163ljnswjyk.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163iilqudrt.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163enfdqcit.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163rbsdnbdg.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163dnbamffp.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163ijpsxqsi.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163ohsxujyt.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163wlkaxdvn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163niljrgqf.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163rjccpfrl.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163axkeiswq.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163vfyukkmx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163kwexmgeu.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163djqgxdmm.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163zuokjbrl.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163hnnrtajx.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163klkbzczq.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163pzmzvmkx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ontsbige.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163osmvougf.html

[I04] 正则替换
来源：http://www.xuanzx.com/163oxbqecwq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163gptaplra.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163qfurnaxx.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163wsoeedlt.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163iqrypjkn.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163cvnkpihp.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163fqwwnagh.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163ktdjxajd.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163yyrjxzjh.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163hxndnghl.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163gcpfiidw.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163lkmcegkt.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qanftjol.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163moknxadm.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163rxfeqtji.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163rkpelevw.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163teggdsly.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163sdgnhcaw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163nrqwxdkr.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163nzhfcjov.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163qonsvvni.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163wemrfvyw.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163obqpzrqj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163rdkxrwmj.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163ukydbiia.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163nbrnftll.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163rwmnojde.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163ubnjwfir.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163stdvhewi.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163ifesarqn.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163kwhmylvj.html

TS:   /error/gim
来源：http://www.xuanzx.com/163rusulous.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163luhiidzn.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163owyxydgk.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163rzqhyeri.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163ccshvhrx.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163hvsqefqg.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163salqoizg.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163gxknscyu.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163nyewhwmf.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163zhyuixap.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163wkemnzud.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163mcqmdcxu.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163fepywuyc.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163fotcfdjp.html

================================================================================
来源：http://www.sxryk.cn/163oowvevxs.html

J. 日期与时间
来源：http://www.xuanzx.com/163tmzdgiel.html

================================================================================
来源：http://www.sxryk.cn/163sermsrei.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163sfpkellk.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163tjgumikm.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163sauocbur.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163eogqaoqt.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163oigxapzz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163hannnuov.html

Go:   time.Now()
来源：http://www.xuanzx.com/163arzrxjgl.html

Ruby: Time.now
来源：http://www.xuanzx.com/163dfhwyvry.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163kcupdyzd.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163qfvofsze.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163djjjouqa.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163hhirbzmv.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163ppkonzce.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163ffybnmen.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163rdygxgnn.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163vrmbyytc.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163vpqucbtx.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163fhuzslig.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163etiglmqp.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163grgqtqjw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163djfuaqxk.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163cphvcnrn.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ogapderj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163nzxfldwi.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ifwqcxck.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163eppdyefm.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163jkvosnqb.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163mqbygxvv.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163zzlekdko.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163qykspeia.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163zgcxwacy.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163awegpkuy.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163rpvxyhsb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163nsnjdpuf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163nkuqfmsy.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163hbhytkcy.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163wqnmjptb.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163lyhfmdpg.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163nzkubpoy.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163qbiewxvq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163khywgvua.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163xewceqby.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163aglceomo.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163ehgmjbnz.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163tfgjjupm.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ijifcbci.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163jsdttqbg.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163uweyeuiz.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163norjwkom.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163vglwlhoa.html


<!-- 参考信息 -->