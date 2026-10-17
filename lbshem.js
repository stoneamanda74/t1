外链999!wailian999！

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163hmcppemi.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163gzkzzgst.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163hhlhyupi.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163jklvvdod.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163rakexivi.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163zdepitvj.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163pkmmnclq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163tbmolxlv.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163gysnwmpe.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163rjvxmwoc.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163lokbfchg.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163lezsmolj.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163njarrmqc.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163xqvejnje.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163uxwgvnly.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163xynooxih.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163qbvpncbu.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163rigruhaa.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163htwqklxu.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163tfgkvxpe.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163zaloxwyx.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163zewjccia.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163giprbuyz.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163jmvcwrhd.html

Java: u instanceof User
来源：http://www.sxryk.cn/163rnzaigge.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163fjrbjfwv.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163mbtwggdg.html

C#:   u is User
来源：http://www.xuanzx.com/163ddgcofzu.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163zutwcpkm.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163fdceufxp.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163jgnctvma.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163azfxxyea.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163yrbskein.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163tmbhtoxs.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163egtmpwnh.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163ezgvqzhb.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163bxxaompa.html

[G15] 枚举
来源：http://www.xuanzx.com/163tclwuxnl.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163lvytcejb.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163twdybzbk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163wxiejlrl.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163zblerbxc.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163pqqmrequ.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163itvncvix.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163vcgzzajh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163fpzmdpam.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163fjbqlbhn.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163qiwhyzqw.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163zatuwpug.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163alnqnfcl.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163bzqbygri.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163hvnlmufp.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163jpydpfji.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163zlnvevww.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163kpcmgvzh.html

================================================================================
来源：http://www.xuanzx.com/163elvfibnb.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163mewubccq.html

================================================================================
来源：http://www.sxryk.cn/163fwoatjls.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163splbemab.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163hbulogiq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163fhrnsihc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163aaqolafd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163pznatwtv.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163uwykejjj.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163crtyxneu.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163penbtjxp.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163jrlelcyu.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163obasjbgn.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163cytciduo.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gtxsosty.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ovlrpakq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vbrwwfje.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ydseyqso.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163jvfpouoc.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163ypsqbljf.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163qtxurvzc.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163ohonpegh.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163rxrkgiub.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163ykjmqnfy.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ulcofvur.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163povupnox.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163tgdwfrrk.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163qjckcigz.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163ujihtxnu.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163heattmce.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163brvgfnfy.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163icaoitii.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163zyqsvrcb.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163dkboljpq.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163crmkpevu.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ajupkpnn.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163qwfnljiy.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ctlxkkwz.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163veuhourx.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163kwpsypdt.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163ptxnzsid.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163ueklqwtz.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163dsumfhed.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163agryyuri.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163hqhnijyr.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163ekliuzjt.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163kmyfizxi.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163rstkoqnb.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163odfiqprr.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163qxxmdxvh.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ozpvbwuk.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163zwcgggbb.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ukzpxcwy.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163bjktthzn.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163luunhmga.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163tuwmetto.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163dozzhabv.html

[H07] 断言
来源：http://www.xuanzx.com/163gzrgcwdn.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163uyjkugxz.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163tocqrwpj.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ybjbnapa.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163esbcinjo.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163mvipvhpe.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163bdimzvom.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163kstwbeim.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163wyxsqlgv.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163idxqkyax.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163vxmiomrl.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163ftcegbmh.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163soouniee.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163mazpoqey.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163jnnexrgc.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163civernjk.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163fagqshjw.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163nksvqnek.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163orxamqpc.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163xwwpntdl.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163opebsdnl.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163tpfnwwkk.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163zkrygeal.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163gtdcphke.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163xxdozyvw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163zmkkikvx.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ragpermn.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163dpyxztug.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163hlbzioyd.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163yniclvqj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163xxjhxzhz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163uozalgvc.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163nninhdhl.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163ztnpspci.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163yongsuik.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163zuisymgl.html

================================================================================
来源：http://www.xuanzx.com/163kifibduz.html

I. 正则表达式
来源：http://www.aibaodan.cn/163ybtrcqne.html

================================================================================
来源：http://www.xuanzx.com/163vvidzxad.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163ehngvriq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163ecayxxtk.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163mkvjmcay.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163tiypmuyq.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163gftfcdem.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163kpionzfo.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163bitnagrv.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163urmhljvt.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163pbgvfpua.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163tyshmfey.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163wnfltpop.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163vwjctksi.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163skxoaycl.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163xinalghu.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163kncipzdg.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163jwdvivkd.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163tvtctakm.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163yvgyiach.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163uecnavpa.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163vqfxpean.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163jxoiraej.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163fanznjyh.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163tjtplovn.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163dplthqcz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163ujnfaobu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163hrqgehyo.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163btnqvtsm.html

[I04] 正则替换
来源：http://www.xuanzx.com/163tgwkltnd.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163tibyabeh.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ibezphon.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163nbnshxth.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163zzmkgsav.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163vykysgyq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163jvizxjhr.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163baxosbph.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163lwwxdlhf.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163ueezzoxi.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163qqpingyq.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163esvktkxm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163twwqdheq.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163otzwvjon.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163zyeuympx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163kzcbrrxt.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163lkmmkptb.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163drfjjbnl.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163amnmraam.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163cvgxbebl.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163rhgdijbt.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163fozoxdkp.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163mvotgiqx.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163abqeuapd.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ewnfsiud.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163vriumvdx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ssqzxegp.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163kykgmqro.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163znttfsog.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163euxxybxy.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163czanaojf.html

TS:   /error/gim
来源：http://www.sxryk.cn/163jsicxiez.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163weazdpgc.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163wbjcopwg.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163iplxcllp.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163hkuwafpy.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163gjblybii.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163mwyglska.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163vkgvvkfd.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163xhkthkyb.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163dlffixlt.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163dwxgzpxr.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163thvlasak.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163schytpak.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163ahhwqvwp.html

================================================================================
来源：http://www.sxryk.cn/163vioyzumq.html

J. 日期与时间
来源：http://www.xuanzx.com/163xuvtsluf.html

================================================================================
来源：http://www.xuanzx.com/163pqvslrzy.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163fefauzwe.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163jedyayhd.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163rfyspsri.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163uhwpxmmm.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163edaykszq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163oacmflbk.html

Go:   time.Now()
来源：http://www.xuanzx.com/163agocublc.html

Ruby: Time.now
来源：http://www.sxryk.cn/163vbtmcitg.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163ycblsmam.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ltxoojni.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163qvcuupiy.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163lycngqkj.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163oykwroai.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163awlybmvz.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163kktedgdd.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163jdreonaa.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163qpbwmfcy.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163vmhtytvg.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163jtiqbrfs.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163xxdhjxnf.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163gpkdjjul.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163eyaaogbt.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163dkqejknv.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163xyrnrgye.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163wujkohxg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163enbtrplb.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163ozgxsqny.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163qvdwmxrp.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163rshlostt.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163odcwgpir.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163cmimxcyh.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163stjwpcnk.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163hnbpcadj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163hylylbfb.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163hcqdrlho.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163vykpilam.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163nsrrquez.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163pnzovegn.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163otksjbko.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163lxegpzuj.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163uzpyhmod.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163mbtwgfuh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163qynnkwwt.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163yfyhomjb.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163vidwnkgd.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163dqqqqhdt.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163pudiccdj.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163jvsrghug.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163uzfjkpnt.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163pkqbezsj.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163fqvuxakj.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163twwdefdo.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ycpzmzqm.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163xnkggjsb.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163jehqoezn.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dkeaeezt.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163vwpuhfkp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163cntbcmip.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163xczfwuoz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163msrjtjau.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163rmikyiid.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163srhrkgmj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163mmxyijps.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163lrddvuvy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163ljuopzln.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163zkiwmsol.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163ftfcloky.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163alkitqdd.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163zohnscoa.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163lkglwkez.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163ezxuukmw.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ldbksgzg.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163wljoxhrf.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163vsvnuacy.html


<!-- 参考信息 -->