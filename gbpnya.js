外链999!wailian999！

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163rykwkepd.html

JS:   static f() {}
来源：http://www.sxryk.cn/163sezghahi.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163sqzkntmf.html

Java: static void f() {}
来源：http://www.xuanzx.com/163ypuckcjt.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163ljqxrraa.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163dvekfvvf.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163opumonaf.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163dpwngryp.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163myrteutx.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163psdajpbi.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ftzsnhem.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163dnolywhd.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163nmvsoggk.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163npxunypc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163ugnwkgyc.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163crbdmmxs.html

[G10] 访问控制
来源：http://www.xuanzx.com/163nyqwdjvn.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163eolnlmmo.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163cwzmkwbz.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163dadegbos.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163nsslpszi.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163xwzztiow.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163cbhpexvg.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163ulxxfzoi.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163jgpipyma.html

[G11] getter / setter
来源：http://www.xuanzx.com/163pzxguald.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163ktyjlkrt.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163kndrblzr.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163uxfshqbt.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163ommvfeli.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163twbejrwn.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163jbgampyo.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163zejarduf.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163lkbhmppo.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163wwelhwqj.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163rwjvqiml.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163qmtcveqe.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163dsrlcowm.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163achlniko.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163ppxemuen.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163kxvcvoxe.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163kidrvpcj.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163zzvouibh.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163cazvfppd.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ousfweos.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163izrzxukp.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163qqgikfgq.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163uoacbtti.html

Java: u instanceof User
来源：http://www.sxryk.cn/163lidvcvtv.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163hzzlgewm.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163kixbytew.html

C#:   u is User
来源：http://www.xuanzx.com/163ofvskykm.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163fwnzglen.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163sqhyiakp.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163vcqinmnq.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163mxricrru.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163akjxutjp.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163guiggvqh.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163rafqezqw.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163hslajvgv.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163qqwgxjsn.html

[G15] 枚举
来源：http://www.xuanzx.com/163vuerakvz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163pmqcgqkg.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163hkbgvnrz.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163uynzhbgo.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163zrdvikdk.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163hxukjsxl.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163jgxwhzxf.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163lwjihnmr.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ggvslnvu.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163tiflrjuu.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163kkmhfyjj.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163oompcttc.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163xygeyhwz.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163efrffqhq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163euvwstlr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163bljthvar.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163gpqhvbyk.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163poicnxyw.html

================================================================================
来源：http://www.aibaodan.cn/163emgvmebu.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163vmfxpgom.html

================================================================================
来源：http://www.aibaodan.cn/163hxmkymdp.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163muyeyrbj.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163kvkrgsaz.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163uowmlfup.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163uyuxdjer.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163tudabohm.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163sknqxsvn.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163mrjsiknu.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163osygchzn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163qvqzlllj.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163kmmznink.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163veyhkdsr.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163cjuegnvz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jdtuevus.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163pzolrygm.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qyykceiu.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ixdzndoo.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163njtwbwrm.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163zojwlqfz.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163cmotevrr.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163nihnqdsr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163olqsxctv.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163keqnpygb.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163spbrublr.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163tyhhpnog.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163gpkvelfq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163blueeipv.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163titvxhcu.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163hlaweoyv.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163lnwxsqor.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163fuqxsxsh.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163xohvuqby.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163eucihvry.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163ovdyjsyz.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163derccdhw.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163fngnitbn.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163svdlqncq.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163pfpkftnl.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163lgciyfqk.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163bkcghexp.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163izqpwytw.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163gaxvtprp.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163lojccudx.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163fgrruitg.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163zpxnpryq.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163yewiamgw.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163uprpkqsn.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163apgylzir.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163jiokjkfr.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163drbomlam.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163dqcrghwe.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163qprhvsdf.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163gsaqorys.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163xcpfpkgl.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163wbevcofh.html

[H07] 断言
来源：http://www.aibaodan.cn/163ehxneizz.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163nethabhi.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163qsewfxqw.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163feeuiwwt.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ugkokter.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163nmqtfmhv.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163kdywggbb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163iqljvjqu.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163paholipf.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163dbantnrz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163xeprnpkv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163jtcpzuxn.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163ilmrecqj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163yhyqcnou.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163hxdygiuf.html

Go:   err.Error()
来源：http://www.xuanzx.com/163zjbdnzhj.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163wbaoommd.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163sqkcbdrn.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163qdoakucz.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163vzielkvc.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163zjqmhxlf.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163bgbravfw.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163grgkfmie.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163tqeuwzek.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163igaoaqqy.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163aeqmspuf.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163oieftxsg.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163fkfaqskn.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163fgajnolg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163oqcdqmyh.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163cpesfwmk.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163bprzzfcw.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163fqqdlivd.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163rcsemuxs.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ogwelpti.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163xduklslr.html

================================================================================
来源：http://www.xuanzx.com/163yvykoafl.html

I. 正则表达式
来源：http://www.xuanzx.com/163exageuve.html

================================================================================
来源：http://www.sxryk.cn/163cczqqkoq.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163azjdposv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163ginxbdas.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163cflbkypj.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163rlyhpxhs.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163dxlbkxmr.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163zqjovtdq.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163proilekx.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163rhukxqtb.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163oowogglu.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163zwrigbnv.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163fgozmjhv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163hxtclnls.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163mwfbvgqs.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163esxfzcrv.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163ktdmrdje.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163rchammnb.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163kcnkfwmh.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163hlninanm.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163zxkyiibv.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163tfysaiun.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163uayxapzj.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163opmuzdvb.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163yqmypxul.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163rlmgnebl.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163jubvfhvg.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163errhxskk.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163fpstsdkz.html

[I04] 正则替换
来源：http://www.sxryk.cn/163hrowaaoh.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163qupoufqn.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163pilswkkl.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163fqyblnia.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163semxzcra.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163vwujaoqm.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163oudsruxc.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163bvvdikip.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163lwzqbawh.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163ktsrxdst.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163chfvoccu.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163wryikvpo.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163eatnrbdd.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ymocbgxe.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163ceszlbkl.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163eqrsvjqu.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163swniaxab.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ucevknja.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163jjjnlbvr.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163iaefsvjw.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163cglylhpv.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163qnclavit.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163proemhjt.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163cebpomqs.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163kjsjqqhu.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163toihgleq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163tkcasmpc.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163brrluaux.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163imxlsaiq.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163yjiqaglt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163vzgmowzc.html

TS:   /error/gim
来源：http://www.sxryk.cn/163hciochwv.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163yrftxfoi.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163hxnflctj.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163tvqxjubq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163kurrdqnv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163ekzvdvch.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163sgefojpn.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163ukfhvwyh.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163seawdxrf.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163anffoxml.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163ebfigplk.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163pyrtheix.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163vzfuybby.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163buvjsmyk.html

================================================================================
来源：http://www.sxryk.cn/163ssxntevd.html

J. 日期与时间
来源：http://www.aibaodan.cn/163kzbgnlka.html

================================================================================
来源：http://www.aibaodan.cn/163sdefhaop.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163hdofjudb.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163kiekcdqe.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ylmhhfty.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163calwdzen.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163rzknqdig.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163mhmaifjb.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163hhlwbtvh.html

Ruby: Time.now
来源：http://www.xuanzx.com/163rltymicr.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163fngoaddx.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163tgqzcnbq.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163bjxfldpa.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163rkiongxi.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163nloiepho.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163gavqedem.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163ijwqdtqn.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163akkhpars.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163fsgyhqjx.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163ttmeajjf.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163basbjjby.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163asaucqpv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ohlucyoj.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163hrresmxx.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163aqnsrwwe.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163gsczbfcx.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163dflgabxz.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163xwpvpugp.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163pfkdjklg.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163jfjortcv.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163ioiaurfl.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163bvvjugvq.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163nvvelalo.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163oludjqfp.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163jtqdgsnk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163zdljrxbs.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ypsemvdo.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163xlfhpohv.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163ngjnnaae.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163mngsggah.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163stastdnz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163bnxjbcsw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163yuuektnv.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163ofvmqjho.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ckndwcce.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163sxrazqsl.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163gelcgxcp.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163ngwciazb.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ylelhlly.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163fbefggnt.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163hqvhhdqg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ykuyblwp.html


<!-- 参考信息 -->