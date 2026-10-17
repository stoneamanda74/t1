外链999!wailian999！

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163jijbrvxs.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163vhacdepw.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163xbudogqw.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163immeuoru.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163axlniisp.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163dobecstr.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163tfkuzibf.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163hdbvrwsa.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163qdqipejf.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163mkmzozjh.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163cpnydoxe.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163cvzdqhzz.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ryhavhiv.html

[G11] getter / setter
来源：http://www.sxryk.cn/163zwqliyem.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163gdtilqzj.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163wrdyjlfv.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163gilclihc.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163cusgukll.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163qtqlgyaf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163qkldxbfv.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163wkovlqpn.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163jhlzsbsc.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163oboxmupc.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163pegfybal.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ljmfpxqu.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163xxnewhfn.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163hsxdxzef.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163gkacgbrd.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163lvbqljrf.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163aymppwsm.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163apxvwrkj.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ixdbnadm.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163leosxgxn.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163kojcnylo.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163enufqtqm.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163hgbtazkr.html

Java: u instanceof User
来源：http://www.xuanzx.com/163sfoplbro.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163padajjyz.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163edsdblaw.html

C#:   u is User
来源：http://www.sxryk.cn/163gfesunom.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163evpcbfyt.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163hsqblhvu.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163elpcxvzn.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163nsqrcleo.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163gnzsznpe.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163basftbjd.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163hvhfbwvb.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163acdchftm.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163xqsjyjuf.html

[G15] 枚举
来源：http://www.aibaodan.cn/163nrcglqlg.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163sbnrlafx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163qtymybip.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163tujuxkhs.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163uhwtuepi.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163oebsbywt.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163qnfplakx.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163bbzxniug.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ylsxwren.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163ivzrwhgf.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163qqdakdse.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163vpyxcdxq.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163bxupjlyf.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163hvytzmek.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163kzfenlzx.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163sshevmfd.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163nixgnanr.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163bielswuf.html

================================================================================
来源：http://www.xuanzx.com/163jagixkoq.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163kvzmkzcz.html

================================================================================
来源：http://www.aibaodan.cn/163esmqlpgh.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163xkgkhfqz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163cwkcqtir.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163hojxhxps.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163poudemdm.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163rxddrbwn.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163bimnvcdr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ayofygqf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163atpiyqyu.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163nyektalx.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163hcaonjpa.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163rfgjvxze.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rsvbdygs.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163soqfdlcj.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bfopzxot.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163uuyblcrj.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163xndefplk.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163tihrkwqs.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163uogbmkck.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163rqahgxju.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163lxcnwgqb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163sdvimudp.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163qrzsxnxp.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163tjvupuae.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163nvamtxcn.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163npeepyjf.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163olqwvuvm.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163eolupmoh.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163fqtdcvkj.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163jkrvunzk.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163mfbesfcx.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163fxlnecxz.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163zlfdzhnp.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163bpyzczpv.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163fooxuufj.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163nhykirra.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163yrhfjtxd.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163hkhmnizs.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163qkpjpfyj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163nrqylmom.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163pkzwjhfz.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163dxdsfroh.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163lgnbrknv.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163uwhjsxac.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163zfzghjcg.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163bymegxxq.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163gsmyxmfe.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163ecmclvjy.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163zzikrfll.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163zfnplsoa.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163xofezhgk.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163numhqeuz.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163rbiqatgj.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163kjnjmhrc.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163yqjlrygq.html

[H07] 断言
来源：http://www.xuanzx.com/163bcanvaji.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163oxnlscac.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163dasoviin.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163eygmjiaf.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163cqjhycuu.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ammbbbwg.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163walzfqug.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163cgsltxqf.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163vhseukfd.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163rmlndfjt.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163skmsnlwf.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163tzknddsv.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163ymmdgpef.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163iivxaxgi.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163brcepfri.html

Go:   err.Error()
来源：http://www.sxryk.cn/163yoitvkys.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163gbtuskck.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163rvjiblqj.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163tuvwaxli.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163nqmhphjf.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163wytmahrc.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163obhnuofl.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163twoxyrfq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163vawtpxgv.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163apeiryls.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163noxegqxe.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163jsranopk.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163xhliahrf.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163bgniolry.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163edtiwjzt.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163dzszjnbb.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163frtdnjeu.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163ippswrog.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163brgjqtun.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163waqzdjjq.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163phicqiva.html

================================================================================
来源：http://www.aibaodan.cn/163xcrerfnl.html

I. 正则表达式
来源：http://www.xuanzx.com/163roszzoue.html

================================================================================
来源：http://www.aibaodan.cn/163eunbahhd.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163mwbojlgf.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163wyyasupk.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163zjqhonit.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163aoyvrsmq.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163hweobvzm.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163glccvjic.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163offnsxea.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163whrjdgfx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163uosqkpcw.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163elixxryl.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163drvifdqf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163gygvwfyo.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163errbyjmi.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163mnysdgqc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163wlmmixdf.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163bdnvbenz.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163nkrcpgsr.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163dtpewgxg.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163bwisusjd.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163alnqhorc.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163qahnibqf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163dhstdaue.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163lqodbirl.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163tdpzebaf.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163mewzlczx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163tvgctqnn.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163vwcdiipu.html

[I04] 正则替换
来源：http://www.sxryk.cn/163oottwxjz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163zpuarijr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163tiomcsse.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163eahxpppr.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163viewiefj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163vmuiosnu.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163plypansz.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163xwllkkja.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163svigzpiq.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163ffybxrkk.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163rmikwszw.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163yihejnbb.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163hrtzermf.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163grywpqbz.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163xhfphpve.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163osdejjax.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ylxamvij.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163trqlbwyl.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163eqeximhn.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ojpfuulv.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163cjoxnyqa.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163naptiopv.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163bkwqpmgd.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163qdouqssj.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163xfetwsnj.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163aidggkpq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163pvcgafzy.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163cooyaebh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163cbsuhrgy.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ebyrybrl.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163lctrvqxr.html

TS:   /error/gim
来源：http://www.sxryk.cn/163pfknpdym.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163kfuezcbf.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163arogbkgt.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ictplgxi.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163kersicra.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163jjqsnxot.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163idkrnrmh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163nqwkgbxp.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ubifunmv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ibsfrdzh.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163iprnrskm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163pnytwhiv.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163zfixosks.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163vxhqrxnf.html

================================================================================
来源：http://www.aibaodan.cn/163tgltfvzn.html

J. 日期与时间
来源：http://www.aibaodan.cn/163uoijuynd.html

================================================================================
来源：http://www.aibaodan.cn/163wqxhgkey.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163bfuhggbg.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163wocnsxzd.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163rfazzzqn.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163avqqmres.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163gtxiooli.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163sipfkrbt.html

Go:   time.Now()
来源：http://www.xuanzx.com/163vegeaepb.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163pibiizav.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163jlkkikjs.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163khemhiun.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163hrlvlkou.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163gyaarwxt.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163mracqsmz.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163rjthuczf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163dmqwzmvp.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163jbsjjiwf.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163whnvppeq.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163rhyxnlas.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163anqkohqo.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163murigaeq.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163mdtfpesa.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163kdlppfgn.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ogxlsbwm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163uhcgydhc.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163zheijvui.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163pmqhkygl.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163hnxpzdmc.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163xxltbgev.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163zphmvcpg.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163flkiqija.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163hyiykxat.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163imsuuffj.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163swkeudlj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163mtzvnflg.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163vhrwsucj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163nhcohteo.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163tslcotpt.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163wxiyidzk.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163xvssvxjn.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163yjavlcfx.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163kpycjstr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163hypgailr.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163kgnpeduz.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163ljdevwsq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163tprlffyv.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163hofrjwqe.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163qjvwfbjp.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163zsmfvgzu.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163muaadaad.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163jhbqxozx.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163vnojecgw.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163yhirweje.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163qfswxmlt.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163scvbrocg.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163rtfgxzow.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rexcoaaq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163yacglxdy.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163xowvxzwh.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ypkeztus.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163sxctopts.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163elfiqlgl.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163sxuuvlyp.html


<!-- 参考信息 -->