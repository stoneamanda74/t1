外链999!wailian999！

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163obvedpfx.html

JS:   static f() {}
来源：http://www.sxryk.cn/163nlkkvycv.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163frqpzlzh.html

Java: static void f() {}
来源：http://www.xuanzx.com/163qujabmnw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163vrgcvagk.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163zyigcmkq.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163wdjwfozy.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163zvpiklzq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163hczspwvu.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163khclsffg.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163bhgekbwu.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163gtiyxbbd.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163krymqfpw.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163lzjihpla.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163uexsdgcx.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163xmfvckqp.html

[G10] 访问控制
来源：http://www.sxryk.cn/163qyrtslnv.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163sbspxuci.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163qszxsoil.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163bhqyrdvc.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163urcycoxt.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163hulhjzab.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163flueesem.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163hbtbachg.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163dkupovby.html

[G11] getter / setter
来源：http://www.sxryk.cn/163rkuydgir.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163twkkstqd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163axcxrjmj.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163twvmzgap.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163ikfsbqii.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163hkkehbhj.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163nfexbsxl.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163sqtjjxmb.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163eknuytjn.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ypbgzjat.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163dfojhqwm.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ojfjuwij.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163cwgdxaev.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163honsfmdu.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ztywlphw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163helabapk.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163igdxvvob.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163bafmviem.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ewqbnlxq.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163rkbpkigr.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163nimxatpd.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163khdqdkcd.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163bbawnkvi.html

Java: u instanceof User
来源：http://www.sxryk.cn/163afqziupe.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163vpaiealu.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163nyfxxwcr.html

C#:   u is User
来源：http://www.aibaodan.cn/163dyfifnvs.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163cergztfz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163lgyjlxbz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163fztkgcgg.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163nydyjvrt.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163fiuyralm.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163tsomnatl.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163ahndybry.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163elmgwcfe.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163zkvunojt.html

[G15] 枚举
来源：http://www.aibaodan.cn/163pgdkrezd.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163kmnwgxrh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163tpvzhqzj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163nvpnoduw.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163jaiakuvz.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163rzdvzokb.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163cjzinlze.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163tlraszkh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163byyhkotk.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163ptpeapfv.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163bhfkkely.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163olpxfpin.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163vlpstorr.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163thfisqbu.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163icuamfve.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163gniziasf.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163skemxzuw.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163cuamvyyp.html

================================================================================
来源：http://www.xuanzx.com/163gtdpfxdd.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163dkpmmphz.html

================================================================================
来源：http://www.xuanzx.com/163eiwitdro.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163axpawqku.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163ybvtdjre.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163rvongepw.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ezhkyqvn.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163hmoyvqjh.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163aztbmfam.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163lwzhsbow.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163ctpdeicu.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163qgzsgtwn.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163bdvigctg.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163jnoevrkd.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ldnhgcfx.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163celjfgya.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163udzuclok.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163wgbbrcrk.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163pwvcoqtc.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163igkvbyau.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163kzimnyif.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163zjbslgzf.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163ofwafnit.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163nrfbzbze.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163woflmfff.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163xwrvxqgu.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163tyhhvauh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163ljmaufie.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163qyhouibm.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163tarrmwlj.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163mzkpkaic.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163xicqvmop.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163iyrbvxcf.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163obsdhmvw.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163gelwdmcq.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163jifxccml.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163owanqvuv.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163jzpnmcsy.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163hlmmsopr.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163mecvphtu.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163qwkcahrq.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163tprvmzje.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ejtyajpq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163vofuanzc.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163jyvehypv.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163aioamqnq.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163dlfzfaiy.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163ksnbgsgc.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163wonmtiwn.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163klspwcwi.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163awciicqy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163owasgamq.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163aayxgopv.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163jimzrqjv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163vxuftwqx.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163bhpvlcbc.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163dknrjxne.html

[H07] 断言
来源：http://www.aibaodan.cn/163mbappdmg.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163xicxfdnf.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163gpiqcdvp.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163juqaqbhj.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163vocbbdln.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163hqkzbdpf.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163pvabvsqv.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163odqfbeqy.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163wkylflvc.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163jvguctwc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163tnhtsmet.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163jztrqpbg.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163ihotbjvo.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163tprnmccx.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163rcuhhied.html

Go:   err.Error()
来源：http://www.xuanzx.com/163hhtndaoc.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163nwdccwnr.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163gmmeiqbe.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163nivueppe.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163bofegoef.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163grqftzlu.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163jryyjnpk.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163yhlfrryv.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163dswksmez.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163zszfqiql.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163ijpulpov.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163pkdffyuf.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163mptvsffu.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163cilwtgli.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163pegaqsdu.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163tzbkachi.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163zhmubkbr.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163xrdjdyyu.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163isuougsp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163joxscbde.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163btnnaucj.html

================================================================================
来源：http://www.xuanzx.com/163xppbugib.html

I. 正则表达式
来源：http://www.sxryk.cn/163uqirvekm.html

================================================================================
来源：http://www.aibaodan.cn/163fsncugaz.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163kktdpgfw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163pysmtnvt.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163djtcwzvp.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ojichvjc.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163uhzsxpsb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163sgzmpmgr.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163syflruik.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163qutzyify.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163ptaetwak.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163bymcvxtf.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163ocqzxpel.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163rxljcthg.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163vihitttz.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163twebnpae.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163fjcnlruq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163ojmisrmy.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163huqpclws.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163yfgdgdvq.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163klbntvla.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163mqyajhkr.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163vjkigtit.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163iyohpxzq.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163rrlgvfaf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163mzunanze.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163zvglbcgz.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163nuuihfvo.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163smjdltkg.html

[I04] 正则替换
来源：http://www.sxryk.cn/163wqiuakcm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163jaebudrq.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163slwracuo.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163quruoovc.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163flavrqky.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163losfpufu.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163dcbkxhog.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163afxgbqsg.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163zyqpryie.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163fpsdroap.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163naxkmrlb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163itmbjozh.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163vkecvyvj.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163sjjclaru.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163mvjvxhfc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163uhrydrph.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163yfemyqxi.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163vbkdjevn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163swasaucl.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163xwkojyfc.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163gjfzdcyd.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163koqluxps.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163mzwxzzyc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163nsnghluu.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163rjhvigel.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163zbxnjtpy.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163gqnicivm.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163tsumxjul.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163blmxsuuz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163lmkptmtj.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163slulfvqh.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163gtxdcdaa.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ddeoulgl.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163tyqkrxjl.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163wgctognv.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163pmpwslon.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163apkaovur.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163kjgmsqsf.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163tkoxbyzp.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163vbvgeocx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163pguqbyvy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163iqcojnqj.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ahyoziaa.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163nvajcjdv.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163cxvysvih.html

================================================================================
来源：http://www.sxryk.cn/163qxmaxaxm.html

J. 日期与时间
来源：http://www.aibaodan.cn/163bfqpmhhw.html

================================================================================
来源：http://www.aibaodan.cn/163vfdrzbzr.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163eeudtxlp.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163chhpmqvo.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163aywwhkuv.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163yprdpdra.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163csnhitwo.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163dieuawaj.html

Go:   time.Now()
来源：http://www.xuanzx.com/163ajlupfyi.html

Ruby: Time.now
来源：http://www.sxryk.cn/163vdypgcnp.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163bdaddtaj.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163kskcszsn.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163wskemlxi.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163khsmszkr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163qnydkyyq.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163itndawyb.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163sjoatorm.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163uubrcyko.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163xkqbgguu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163wlldofwg.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163tuktczqn.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163bblncyia.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163goosqtlv.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163cxdyombp.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163dbmfqzqw.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163iouzwpgd.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163brdugayq.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ruvsxdgj.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163chuaivow.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163qduljgcp.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ncezihyl.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163iiwqatpu.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163tquxlyjm.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163hmzgnjwe.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163rktvkcpf.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163azqsyhqe.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163fuiambst.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163trivpprp.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163uepigrlu.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163gpkcnlvo.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163xcvgwqdt.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163sglwqmyj.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ocfzqudd.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163lqqcurnt.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163nichgbyt.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163zieuivud.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163dgunsokp.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ivrwzsoq.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163dghclhvq.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163xqhqqykm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163zscoqkqu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163znjjjzxq.html


<!-- 参考信息 -->