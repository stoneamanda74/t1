外链999!wailian999！

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163fmqindsj.html

JS:   static f() {}
来源：http://www.xuanzx.com/163gkhegpjh.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163tglsupgd.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163ljjhqqfx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163lktvualg.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163rjgiydmq.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163wkiiqkxn.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163shbmggll.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163xtrepluc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ggsudtmb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163yaloepks.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163jcfglccl.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163slgwcfpx.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163baulvizo.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163domaocdq.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163mjasleod.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163aicuozpp.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163saemhtzl.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163ygwfqpay.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163ebyntjrg.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163ymihfyrn.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163gmvsdaky.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163kechgmnh.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163kvxzqfqg.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163nlhcgask.html

[G11] getter / setter
来源：http://www.sxryk.cn/163xvhipdfw.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163hgvebdkz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163pckbqvrd.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163dnpozgiq.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163veoidhwr.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163wpxqbffq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163vgpwmluw.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163tmcjkgdj.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163wyfafoam.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163oyzwlosf.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163jemiecjy.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163tbxopcnl.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163xfpicefq.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163nwenothx.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163acjxilas.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163mdcrmoeq.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163tqqxjihh.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163wrhogqmx.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163olpguxoz.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163rfprogyc.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163pqfbkfry.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163vuhynfpk.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163jejategw.html

Java: u instanceof User
来源：http://www.sxryk.cn/163tknuymdk.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163fepytetz.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163ijslzsih.html

C#:   u is User
来源：http://www.sxryk.cn/163jhvbuzpm.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163fxfvojdo.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163qwtcwmme.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163dhfcktjz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163esiiobcf.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163midverzb.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163iyayzsec.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163rimmbtfz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163jhxvyxja.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163zlziaxit.html

[G15] 枚举
来源：http://www.aibaodan.cn/163lvzhwpck.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163sqeabtpx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163rlihvwly.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163pamdiqpc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163cbolofeo.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163qkqcodub.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163shzbmhkj.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163grqjoajt.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163havyrkxa.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163btfykqha.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163tzoajrnz.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163vazjdggh.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163dwiwgwbq.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163oqpuwfoh.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163tmxhsfhr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163ibxddrfb.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163csnrsbzu.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163jbjnphxx.html

================================================================================
来源：http://www.xuanzx.com/163mlsjvaic.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163ffltdnzu.html

================================================================================
来源：http://www.sxryk.cn/163ywkygaat.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163auoljony.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163hjhnbidy.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163vztulgbz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163tfrluhit.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163sflbbqmm.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163qwjfvwvi.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163bwwfhhpk.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163scjycdpf.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163vtpcnlwe.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163jeqliybr.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163fcqsnabg.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zocdikij.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163tqhwmvte.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163spvjkies.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gmjcdnhe.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163rzsdaajf.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163slojwxzt.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163epsekzjm.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163iiopnkdd.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163cbxihlpj.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163fntzttwn.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163bojtwnhp.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163pigpnkov.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163ndfngqxv.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163unorxywy.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163vpknfuxz.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163hrnzrbcz.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163xonyqych.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163jwymchoh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163ycuzuloo.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163hhtaucaq.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163xjincymu.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163czrtlzlj.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163nlhgyfpg.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163yabemchb.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163fksbeofp.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163tyvxwwvi.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163jxsqdefn.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163opsflivh.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163bfztwcan.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163vmbupjsi.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163tcwwzpbt.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163cxdgbzmq.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163jnvmnwsn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163qsurylbu.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163ikrrfhoo.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163shqjtzyf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163dwcgdgcj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163mszskojd.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163wkalqvza.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163gqtsguxt.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163nwnnfexp.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163uktwwmsp.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163nzbvipdm.html

[H07] 断言
来源：http://www.sxryk.cn/163tfdyxbxp.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163omhgmrkq.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163yafqgoxr.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163yljuuygd.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163tzsptjvl.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ijmnqqcg.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163fvpcihpl.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163rcbhkyhr.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163gxxolbgw.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163usqcpiid.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163aejvyggk.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163qbicftnl.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163zilwdycp.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163mdbucfdj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163zwwrpjmr.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163agfsqwwz.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163mbpuzmsw.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163imucohql.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163jyhwotct.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163eosjgbog.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163piswlwcl.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163ftkxwtyo.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163lahzqhjk.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163yvsnakjq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163tokkgfrj.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163wrxeuqmb.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163nagagwek.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163hgaieoxz.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163skuorvjv.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163rxewbecz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163bzbtnyyi.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163xwcooeqx.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163vdhmjvhl.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163iilbscds.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163nsxqyyxs.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163ecmfyahi.html

================================================================================
来源：http://www.sxryk.cn/163mtbckaij.html

I. 正则表达式
来源：http://www.sxryk.cn/163moqrpkqg.html

================================================================================
来源：http://www.sxryk.cn/163bairdbbi.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163jjxxfbai.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163kbzzekqc.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163oujbzpcw.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163vwloowuh.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163rstuvzdz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163lulahcgk.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163mqotusln.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163jmdwssai.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163xwinbgkj.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163ucmtebtz.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163gbvikuzc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163vlwueybd.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163szrbtate.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163eazuaudf.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163mqqfohez.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163qlnypspk.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163zevvoujx.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163lijgzuii.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163barcvldp.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163dpvxadgs.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163hsjdxwbr.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163qofdwdch.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163vegudptn.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163edrcwqma.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163mswzweug.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163aopdtamo.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163kwpswcmg.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163cvimigxk.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163rtwcoikc.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163fvbkapel.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163gwpgoomk.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ofmahpka.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163cdeutlco.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163ierfcdfh.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163wtgeiphv.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163ipbwgtqr.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163mcescwuw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163cgegmewb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163jjtodwpj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ejxtuvds.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163zvckyhlg.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163vjpoqgxv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163bocezjsj.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fzoxgqey.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163hmfaihij.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163enpkjjft.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ycibowbt.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163eazcqqgt.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163srwcidgu.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163wytwjouy.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163bmrybmwz.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163mxrmtrea.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163pzivbiwj.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163yseazuth.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163ermlkghu.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163rygocfor.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163uunbmian.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163snrmktiz.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163lrtwhthl.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163nycohkue.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163wnxfrnek.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163xjmyvftk.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163xvdpqruj.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163hzhysckz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163rmhwskxx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163exkyekqu.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163uhqqjxbv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163kqqnbski.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163bmnmqeub.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163xawvwtvg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163qirfnglg.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163niigqntf.html

================================================================================
来源：http://www.sxryk.cn/163uwctjiwf.html

J. 日期与时间
来源：http://www.aibaodan.cn/163nuuwnmqf.html

================================================================================
来源：http://www.aibaodan.cn/163yqiweboa.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163rwkecvra.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163yzeamvlx.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163tzeaoxak.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ykhzxedq.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163qasmmccq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163reabmmmo.html

Go:   time.Now()
来源：http://www.xuanzx.com/163jerbnuai.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163jukfjqzk.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163zyypjbsb.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163ekntsjxg.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163rdygayrc.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163eqdsezer.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163guxnwzpc.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163jzzrnseq.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163narrcbiw.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163irapnqdk.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163vjflzkgy.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163olnbwdpm.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163xgsfrsnt.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163dgezatyv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163etgqnasa.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163rufljmxc.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163sjtupuno.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163vkqyjrrv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163bsumhvwn.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163uidasbnl.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163amcgngkf.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163xvknnpgb.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163sifcxhhr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163gohigwpm.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163fdktjvhc.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163vfpeflwc.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163tdxshtxm.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163xotgmofa.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163kjcielfr.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163tjpkcndu.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163fwshxthp.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163mtimbgzf.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163wjgxzuno.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163oealfrwn.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163jwwqrepr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163auslnqrk.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163qhlystyf.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163mvnlwgep.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163rukqiacq.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163tzihvrzm.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163pjmrurpv.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163heildlrt.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163psrguzqw.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163yjlnrghd.html


<!-- 参考信息 -->