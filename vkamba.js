外链999!wailian999！

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163wchvysxy.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163ozvllpha.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163nuwoczgj.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163avhrssjj.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163ctcvhsyl.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163hhmkuogg.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163rxivwshd.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163peatgfnr.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163dsivkuki.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163uautugas.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163bhufqfjd.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163pkexjnzl.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163jqnvjyvb.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163keehacmj.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163kflmgkux.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163zanaimro.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163uqcwnoam.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163ijzjzigj.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163tcaewezu.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163dkpxhbds.html

Java: u instanceof User
来源：http://www.xuanzx.com/163irzdnbhi.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163updklpdr.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163hbqtlmdv.html

C#:   u is User
来源：http://www.aibaodan.cn/163dacyqhxh.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163inlxskdc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163vxleskyf.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163wjgobibj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163yypahday.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163ktuyicrr.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163dulkjefw.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163hvnhyskl.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163qnvfsspy.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163cehzrmcr.html

[G15] 枚举
来源：http://www.sxryk.cn/163zeywahpr.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163bpyigtry.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163lkioajcv.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163cztiukoo.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163apvjfqsj.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163qsqooscr.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ojlbrcqn.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163lmqvwgbw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163xzpawkas.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163luzdgxfe.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163kvsxfaop.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163uitapvig.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163cygonbsj.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163stmdqdkr.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163wjqemerr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163wvxxdvur.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163hhnlbqlo.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163krkrbdld.html

================================================================================
来源：http://www.aibaodan.cn/163tbfviqpx.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163oxossbmv.html

================================================================================
来源：http://www.sxryk.cn/163xilmcoep.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163omonbjnu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163qqymnpgo.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163fylgoyff.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163bmmahgfq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163jiqirmbv.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163lgibgeak.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163ofcpgioj.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163ejijzdny.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163oprukklw.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163iaharxtg.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163mvmjbrzo.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mklqaztv.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163bwbmudtk.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163xijsnveg.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163sgwdnjyq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163vadekavq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163tayqrwoz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163ucdcvpjc.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163yrhuqhov.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163foknamll.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163fbnbppoz.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163lleayncd.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163dxmqiqcm.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163nuyspihf.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163jeiqzavs.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163eodapcki.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163vpcyoznu.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163mxolkugg.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163iboaqtfb.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163cjxpvrsp.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163zgjkdxnk.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163jsjfmdau.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163bfjnxhfr.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163yznczwso.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163kiymhlye.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163xogfsqpa.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163htnoiurp.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163onzrsfjx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163knekvtjb.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163bzpzibzw.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163kdxysydv.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163azuygsqa.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163ilymhigi.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163wgwbyyfk.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163hrrbklnf.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163qoyllmke.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163adykrlhi.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163vaugcacx.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163mvftdhri.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163xujqqfhl.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163adogurpe.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163xsfxsqhs.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163xxchzvho.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163lcmbchez.html

[H07] 断言
来源：http://www.aibaodan.cn/163uajubdeo.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163htippiwt.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163zyuveqfj.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ahkkjwyh.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163hxxfqggr.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163epijxfup.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163eqceyzvg.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163muinurhb.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163lgldjnvi.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163fwoucduw.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163wqvurptw.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163zoaxidtj.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163srnnsdir.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163qviesvfs.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163inaignfn.html

Go:   err.Error()
来源：http://www.sxryk.cn/163wuqtbrya.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163bbddiwcw.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163qsihxfpw.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ovdgtlyv.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163rsrzxpcj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163hyrptjma.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163utqfkfbx.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163pflbtyib.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163wvvcalsj.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163wgjdqbyz.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163zqvwqewg.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163lzfvtfws.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163auxfdhry.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163cxpsutgx.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163lufhzeys.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163vgmhuxqe.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163urrgzsak.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163hygspyyn.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163nmiqiadk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163drmyjnhc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163fnrnsyuk.html

================================================================================
来源：http://www.sxryk.cn/163ecsqlqzy.html

I. 正则表达式
来源：http://www.sxryk.cn/163lunhhswh.html

================================================================================
来源：http://www.xuanzx.com/163ldrhptha.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163chmsmqit.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163zuckevbh.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163kbrwulpu.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163bibidagz.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163mempzrtp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163jxduogfs.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163tnmbpims.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163lalhuazq.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163zajfdlqu.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163pohdnznx.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163itdlzmoy.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163zhhxoydz.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163dqgxoilu.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163foxrrvvc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163almeyrmv.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163basbpmxm.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163xfvuvekk.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163urfsacgi.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163bcxjnfua.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163ycdonupk.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163lkwvwjeu.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163qmdhldct.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163nhrgwuah.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163hzkmdjgl.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163bcpdviau.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163bgmokcaj.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163jwdklkvc.html

[I04] 正则替换
来源：http://www.xuanzx.com/163ealfpoio.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163poesinmu.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163kdmoteii.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163rjvhmooe.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ggynogku.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163mdncskfd.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163orykqmnl.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163lbajxdla.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163fqqdmhqp.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163lcntyblp.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163ofgipdey.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163loljzktc.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163cxaiqymj.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163gocwpmye.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163gwzatgpe.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163baujvtzs.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163fvjoegpk.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163rtmztxxm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163aaoieuqf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163fzpfzxeo.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163guolpson.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163xcsrlieg.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163jlbdtjwj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ssxjegtj.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163sdvzhmsr.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163dqpximxk.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163kxaaepjg.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163yylchrtw.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163lxloahdn.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163netvfsrf.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163fxbtnzho.html

TS:   /error/gim
来源：http://www.sxryk.cn/163vexosqfy.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163vphbtfhk.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163qqibmvck.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163fykltykq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163albushgz.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163vwmbsooe.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163fwmpsivx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163svrtvkjf.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163sansbrou.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ygohiaat.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163lzgilxdh.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163erokdaae.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163zpfzsfxx.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163acxhvstj.html

================================================================================
来源：http://www.sxryk.cn/163azywpkhi.html

J. 日期与时间
来源：http://www.xuanzx.com/163bedcidii.html

================================================================================
来源：http://www.aibaodan.cn/163viqkcxyr.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163gbjpxufy.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163jyzmjexm.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163cvzwnzoh.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ibwmurvq.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163nwywrbwg.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163lfdenhbq.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163fomkaimi.html

Ruby: Time.now
来源：http://www.xuanzx.com/163hsguissv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163dzujaeoj.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163ezkdohqf.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163smbqzpuf.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163mmynvlwa.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163kksrmpkd.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163mknrhflu.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163fzcanask.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163yledgzex.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163wtnqbock.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163kxvttyzf.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163xhxjkwpg.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163jqcstyjv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163lciaqeck.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163qenxxyvw.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163dutrwgmr.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163epqoffij.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163holstxcp.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163dkfmucbg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163xwwvwvrg.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163qpqxeifq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163hnrtznrv.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163fbjtbijs.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163yyijhhyy.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163cxveujdo.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163lajjepbn.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163nixcdigo.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ayvnvpzp.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163drrjuoif.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163wetejira.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163cgtprdpx.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163vbhffpst.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163jdujzeru.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163tvitjbzg.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163scmvtpnm.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163bcwgxqow.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163bfyibfjo.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163kfmmwgmz.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163eeephczy.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ofpundpx.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163bcqafgfx.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163sesxgwki.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163msjvpnko.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163auzfeyqn.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163crmywcwd.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163wrxxibjo.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163lpnpdscs.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163ltzfjhnq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wyvbdhsv.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163vhtvogbu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163lbrkktoq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163saprjpmk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163pqqfnykv.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ueunvczj.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163lxttulot.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163gwfzhzmb.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163xkydbiln.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163mutmrlok.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163gdvaciry.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163mghqdhuw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163kpgemmat.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163scirxaza.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163bvtkzkol.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163aglamhgj.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163dgdevwxi.html

[J09] 时区处理
来源：http://www.sxryk.cn/163alhsamwx.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163qhwgazkt.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163gvjbakjz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163rbfczgeg.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163wupaovqk.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163uzdrlper.html


<!-- 参考信息 -->