外链999!wailian999！

Ruby: super
来源：http://www.aibaodan.cn/163rermpvfm.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163usfwqbos.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163ubtuspkr.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163hqbhkgtf.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163kaugcopl.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163debplwrv.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163ophszcyt.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163yoemynnh.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163juhaqnkj.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163gxrmayzl.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163btbzkvva.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163iapadzny.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163ykwedqnc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163pkqoqwhk.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163smdxmpkx.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163sodlppne.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163rkerjxjg.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163zqhjufgd.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163ofdsxjvz.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ixgaqdfm.html

[G10] 访问控制
来源：http://www.sxryk.cn/163ezfiqgod.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ndwvmkey.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163jyjnzyvc.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163dwhrofjw.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163exqmmnbg.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163fiyncrfb.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163dtiruaqu.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163wgztubtr.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163mhnsfdus.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163vmivstcq.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163zfljtqwp.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163zdixgvdk.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163xpxfroej.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163nqhwnvwn.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163avbgkkcr.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163gfohxken.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163qbskgesf.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163dqtafbcp.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163qxqsuqbm.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163nlpfejkw.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163itaubgwr.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163apmncgbr.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163wyzvjzzn.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163quncyfrd.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163zuplfzgg.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163ijrkjzkw.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163apeykodq.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163fdotmxra.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163lujammmr.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163gaekpclj.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163hnilryye.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163ggjphhat.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163qttokskt.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163vnazyskj.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163cindhhgx.html

C#:   u is User
来源：http://www.aibaodan.cn/163gtdprqtl.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163wkuafnsq.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163rxotcxfu.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163gsxhhvsn.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163rfqhcfoi.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163rincrelr.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163iwatiqls.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163zbbojmjb.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163jydovspp.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163aqpwumsx.html

[G15] 枚举
来源：http://www.xuanzx.com/163sopgnikz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163mbzxlgxv.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163skpzrfyk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163qrptsfyh.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163guvoomrh.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163trlvegba.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163owbkkgdy.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163xlizurna.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163frfwafmy.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163okkrtpmn.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163lwfxwqzy.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163shdmejio.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163jwvygvtc.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163bbdhfvuh.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163hykmotzz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163ahuvzahh.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163ccoxztpz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163ctwnepwj.html

================================================================================
来源：http://www.aibaodan.cn/163jcyiucgi.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163plmylnwo.html

================================================================================
来源：http://www.xuanzx.com/163xuwztfsa.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163fwxnmpch.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163axdtqpyh.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163ugqnikzx.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163umcexkex.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163iwjgubrh.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163pwnvrfft.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163qhxzgiba.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163mrlhlycf.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163kcagojau.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163urmidhce.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163jlpxikng.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163yztdcqgu.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zivbfrmp.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163tnvpsxkx.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qmmgyyir.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163qvylwkzq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163uzbduaff.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163clbevoct.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163aeqvmxqp.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163rrfujrxc.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163bwtgrlzx.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163cflcisfu.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163fpzkwjav.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163bkajbqcu.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163kplqptpg.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163hkyzvhiq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163cvnthimd.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163fufmvfkm.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163uxdshjyf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163ypmvklwu.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163sadxubmp.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163uxnyxjyo.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163qdtwfylf.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163xliurddu.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163mmbakosc.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163xjjuvfrk.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163vjpsewqu.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163gdzalyfp.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163clcurxsh.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163vgplcjwu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163elcmltxg.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163oonimcea.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163rbnivdut.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163fvinslrq.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163sjqdyskb.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163egdkbjss.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163hpofvtep.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163etgstucd.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163xjaooqfx.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ukxnuekg.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163kjktfphs.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163nbsoywqw.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163waqkwijt.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163ropsmdry.html

[H07] 断言
来源：http://www.xuanzx.com/163oyxfjyqi.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163gizinuam.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163unskwmyt.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163cbuobwce.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163tldhfuwu.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163itxugowu.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163zcpknfon.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163zgcxulnh.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163dqzprjfz.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163ycwvfsxq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163gqnxhuny.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163mtrditwg.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163mwwtwfin.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163vugsjmpr.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163stljaijw.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163afcsbltr.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163xpopupqz.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163pnfnppjx.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163artciuar.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163qjlousng.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163edrmfpca.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163fijyijii.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163wqgnttwp.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ukmcjopd.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163alnssoxc.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163hykkkzpp.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163hfywwdet.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163hqualcoj.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163uicklrwc.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163dtdtmswi.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163aibnxuqf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ncjgsrcu.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163ymnbaswh.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163pstbewdf.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163zkczgaze.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163fnwzsmin.html

================================================================================
来源：http://www.sxryk.cn/163cpmnrzsw.html

I. 正则表达式
来源：http://www.aibaodan.cn/163ngawbexd.html

================================================================================
来源：http://www.xuanzx.com/163dofzunes.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163bntwqzda.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163kwocypuw.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163hlossuns.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163fcgqzctv.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163eaecaerc.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163sdaomves.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163vefftwrn.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163votumvwo.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163iyudmnhc.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163hkcendhm.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163kbzknysc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163elgbrygf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163xlllfdbp.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163nvaegcbn.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163uibsjvov.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163wepkdxaa.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163tnohunac.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163iddnhgzf.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ceyatnxt.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ebgyadom.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163tzeckrze.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163sikydwlg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163xoovowgk.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163cpludfen.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163rotxdfux.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163pwjwdwol.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163uzijgivv.html

[I04] 正则替换
来源：http://www.sxryk.cn/163ystabhhz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163qqkkaxtq.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163uqbwilga.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163brrvzjcn.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163tsxhlfme.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163dapqtayh.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163agmeobds.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163ciwwdost.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163jhyajjyj.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163dffvdtxn.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163cskixjie.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163aozdiwjg.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163mfwzyrji.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ryiditkd.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163urdxcmhi.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163pluduzfj.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163vqlqyuhb.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163euqkoiyq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163ppjvzszc.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ismpjjma.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163jqrhnosc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163uqlgzzza.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163rchrmqdc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163dmaetcjr.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163ovpmayoa.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163cxmwinmk.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163eynbqhoh.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163pppgcpao.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163iokkxdxp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163mammdxyh.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163beveuoia.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163lcboqunj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163ubqaabaa.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163cvnyidon.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163jnxenfxe.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163ckpoxvmw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163qnghbtlv.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163vzaiatwf.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163ubqhhmex.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ahiymeoq.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163xsidoeyx.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163seetbpeh.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163xmwjqnqh.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163masvkovx.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163exuiylzr.html

================================================================================
来源：http://www.sxryk.cn/163rcombedy.html

J. 日期与时间
来源：http://www.sxryk.cn/163ctscyxlx.html

================================================================================
来源：http://www.aibaodan.cn/163nirmkhvl.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163qeoebnuw.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163efuzxyxk.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163kgnhuhgg.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163wzczyixn.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163gdexznxd.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163qenojfxe.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163oojatbsf.html

Ruby: Time.now
来源：http://www.sxryk.cn/163hqsqjiyn.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163ozkkdeyg.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163tjnitqrv.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ikatolet.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163pmatijui.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163vcslrndg.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ttiehfep.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163hvrolfxr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163fujsxlxf.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163nehlqawk.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163udgrdtap.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163whbmyrqd.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163eymgauik.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163mvxfgrvv.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163qdsogzxg.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163tkjbcewu.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163hoslqrco.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163taqhkhob.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163nldzvmdu.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163mrehokhm.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163chrzvytb.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163vvndyuey.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163imqtwjhx.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163vczwcrsy.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163zkxvccgo.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163uomscysf.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163dtcitkmc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163paofelim.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163xduvdujg.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163mfvdswea.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163zdofpkrd.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163cuygzfhk.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ijbhowbz.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163siurtpfj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163ohvcrefs.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163wfbrlibg.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163kklwcetc.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163bkfkeano.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163dxpkancm.html


<!-- 参考信息 -->