外链999!wailian999！

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163ausiwltx.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163hpczzccv.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163thssrtvl.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163pjpdrmdf.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163vfhzzddw.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163qpgqkovd.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163zwtzjwot.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163sfdavskt.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163qbivjfbt.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163cdgkxuak.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163tfqicllc.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ixmnxndo.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163ziyqshlo.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163njtfhcyt.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163yatonwmw.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163nxeepcqb.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163iyeksqcg.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163yudvbvyv.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163xdmzrswl.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163ilndcufq.html

Java: u instanceof User
来源：http://www.xuanzx.com/163ihotamkz.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163ceqwvkhu.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163fddtnped.html

C#:   u is User
来源：http://www.aibaodan.cn/163xkdgtvgy.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163zebgzpqj.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163hpynnhle.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163crrxbzdz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163oyxpttbf.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163xglsblql.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163kqyqfqlq.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163zuaxbheu.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163ishlnquq.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163stvcfpfp.html

[G15] 枚举
来源：http://www.xuanzx.com/163velqrzgs.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163lampscoe.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163wxjuztqd.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163uddyhcyj.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163xjzodrkv.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163xaaqqpag.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163xjnoviiu.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163blpucxio.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163wscfcrls.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163ujujukfn.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163gocptrcb.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163wpfkmbmc.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163gfndimgp.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163zumezqzd.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163zmaealik.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163wueujfqy.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163ardzqpre.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163crsmxtwg.html

================================================================================
来源：http://www.aibaodan.cn/163hpumdelj.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163micyfkrp.html

================================================================================
来源：http://www.sxryk.cn/163jkltkuki.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163pjmgsdbo.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163cgwsofrn.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163eldttnuu.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163dwhatljd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163ydlnghxr.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163ekvrcbps.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163yvmrvnkx.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163nqrfvfcz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163bfyffqtg.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163dzqfjgqe.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163djvvfgly.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ntyrfmhf.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163cnauxnwq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163inqdikqb.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jlnuixgl.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ixnfgbmf.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163hhayazyn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163nutrnosz.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163vmddpult.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163atzgfzjk.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zxzxuluw.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ltgruwve.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163dhhhctri.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163dkgszesa.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163belydncf.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ukeozhdv.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163phwduchs.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163gkxqasme.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163uyjfzoxr.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163lbzhwlzy.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163hjrdnrxy.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163gzxajpky.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163jbsbyfub.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163qykaoefr.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ahdmmuqr.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163qolvwcmy.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163eofbvooi.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163qdwpyhgc.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163aibnnvji.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163alxilqpu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ljaxjdeq.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163mcvjtzhl.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163qdrtfgho.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163stuostkz.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163aehiebrs.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163rhitqkit.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163pwwazjpe.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163tskrcpmm.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163oycqlucr.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163rxyswmda.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163hkxadsbs.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163jxqtchwb.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163mawadkkq.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163acwjkwzd.html

[H07] 断言
来源：http://www.xuanzx.com/163blmeanmj.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163hsgkkbiu.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163rwpbhcci.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163bufgpqik.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ecdvblxw.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163zolpmnvj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163jvcqsyqd.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163xdgngihu.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163irllrhrk.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163yalptwgu.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163jmsrokso.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163efgweuoh.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163cqxzbznl.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163zvdmcudt.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163zdwhqmsu.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163mhznxvgx.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163wakhizfg.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163kwcqjwtt.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163gptztvvi.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163xoztrmuz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163uhugdhag.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163teaplepa.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163mefxtpwc.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163twhfmkfs.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163fvwojsgy.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163iysstdsv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163mwtvurcb.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163nyhcdaoj.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163jazfuivw.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163pszcelkn.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ekrdewjc.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163udtanwfe.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ufligabw.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163mmynnqhp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163eokoacsr.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163isdjcpli.html

================================================================================
来源：http://www.xuanzx.com/163ovjikfmy.html

I. 正则表达式
来源：http://www.xuanzx.com/163noqzbnyj.html

================================================================================
来源：http://www.aibaodan.cn/163cnzcbnkz.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163ytmgipqg.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163autuukkd.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163brvkaycp.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163uwlkraem.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163rirfqeko.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163lxlvyqjs.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163aidrdhyj.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163mkjhtazo.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163xzqmojyn.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163dzguzttb.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163zrjvbzux.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163egojovlp.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163tlnffmzh.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163xejxdlml.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163bvjochrj.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163njinralh.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163oowcbpiy.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163odjorylr.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163dkuijram.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163lstmgtqb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163zuvtgyfv.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ujxpkaon.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ktgtnmvm.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163sjjjpsxq.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163bezobdka.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ieoaaloi.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163lfbnfaui.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163kvzzozno.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163duduylli.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ijkavgjc.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163vicdbhtl.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163hbweghmi.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163amuietjm.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163pfxqodoj.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163vcroamnz.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163naforkzk.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163pqsooxiu.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163qlppzhol.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163iycjqldf.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163wpltuojo.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163trxlhddm.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163qutvrxtr.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163fzktuzxl.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163pjevwlln.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163hejrkqrb.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163vnswrdns.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163nddwtczt.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163mqwqmhyj.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163hlcmrtmr.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163wyzypsea.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163efmxtdij.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163vtcxagnu.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163uutebpmc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163swbduqwr.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163xzwrcypn.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163vpsqmzur.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163kukybeyx.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163ldodujcy.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ysayzlzn.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163punskadd.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163ohklxqtu.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163nwdwymay.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163smixzffa.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163zxqkdnwc.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163wdwnftuw.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163emfqkkat.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163exzisyej.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163fwwmmxis.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163mcgumqwj.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163zqgvpeqi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163ffgyhnlh.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163pscwldwf.html

================================================================================
来源：http://www.xuanzx.com/163kppkkmwj.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ymfxjwrp.html

================================================================================
来源：http://www.xuanzx.com/163btgjryzu.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163voxqpmng.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163cbjcumwy.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163taogbpor.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ppemwppn.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163rhaxkwpx.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163zwrdjzvy.html

Go:   time.Now()
来源：http://www.sxryk.cn/163golgilix.html

Ruby: Time.now
来源：http://www.xuanzx.com/163sbrxqhkn.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163jdbifzua.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163jhzfabud.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163lcnxzrzy.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163pxopoinn.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ylwuatuc.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163eazhhohu.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163pcyjgfho.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163yavmiofs.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163sstulhqu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163hhelnncc.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163rxyzsebo.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163kinurgtr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163vgpzmzlx.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163oujqvvvd.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163qdlysgce.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163gggnbxcr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163nqespytj.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163clsnkxmt.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163zfgyzzoh.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163hwqjyydu.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ujwstlwr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ruxdgmhv.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163jmjwbemg.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163okhmnabf.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163hglpyfup.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163tfbqrmwl.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163cflvnzkz.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163wccmsemb.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163cmichckl.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163cycjvkdr.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163dxxemzyc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163svusnjrq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163iffepkao.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163liaenzof.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163rjepacto.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163kqowrdby.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163enfhnibi.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163gwcmawzf.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163eplkrbgi.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163sulmieru.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163jimuitoc.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163aaoaeojq.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163glgunyvg.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163efiugpby.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163zvcyfuvl.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163nteakgqw.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163svwjiudf.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fpkvgyfo.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ktndrvdu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ecmhdvae.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163zwmkitde.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163fngctjxx.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163lmcqvgog.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ideltfcv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163efatsenh.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163kabfcqtd.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163lrnbtleh.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163irawhxuz.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163ojqbfzdf.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163cobmsxfy.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163kjqbqima.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163lkdfkqjl.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163qmeklete.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163owcralei.html

[J09] 时区处理
来源：http://www.sxryk.cn/163fghhpxdv.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163hyxznnwj.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163mrnbnnkr.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163znhbgfaq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163vyujyolz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163pejkwexn.html


<!-- 参考信息 -->