外链999!wailian999！

[G10] 访问控制
来源：http://www.sxryk.cn/163spavxjfs.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163mqhvbbzw.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163kqxdghvn.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163daugirfl.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163fgzqqaws.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163qoskwfyo.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163xbcbvwyp.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163mvnbphxn.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163txhjxglp.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163yglivfsv.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163xgbvsdea.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163fgxrceze.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163wwddzngg.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163qanuvizy.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163oeuwgksw.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163uyychnur.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163aohkktio.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163frasllgs.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163lnlvsznk.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163jfgkclwb.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163gzdpvrku.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163kmmncwxm.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163yahrvlsu.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163pfuysrqe.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163ijmuovfo.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163qmirzqdn.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163gfmabpzh.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163cxycgvpv.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163foacmazk.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163fbeiidob.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163xtamhqef.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163oimkafkg.html

Java: u instanceof User
来源：http://www.sxryk.cn/163xjpruvrx.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163qxcphjvm.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163xxffketg.html

C#:   u is User
来源：http://www.xuanzx.com/163quoueond.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163qdytljtv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163iwqdvqke.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163iecauxec.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163lbsfmlho.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163vydodtvs.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163hbtkzcju.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ysstzvuz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163yomuxnxg.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163kpzcevvi.html

[G15] 枚举
来源：http://www.xuanzx.com/163dnnjqopl.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163rshramqf.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163ocddynsg.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163gwwzyerd.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163fmbxgrqn.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ortkhbuh.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163vlqilmwk.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163dqpmvcos.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ylqkszll.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163qwiuzjzi.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163lsdoyftj.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163hbqlpgfp.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163djoptiwv.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163jlhsxlkp.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163sznbssaz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163gsrrztth.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163xqbzthgc.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163gtjlinlm.html

================================================================================
来源：http://www.sxryk.cn/163kwmrddxh.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163mdnaewbx.html

================================================================================
来源：http://www.aibaodan.cn/163qkpotisw.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163bwysrkgc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163ewybhdvk.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163zwscifgz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163brjviuph.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163fywlawaq.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163kwggnnju.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163octxemzx.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163uvrflwgc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163vkhulskz.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163ifvprwmn.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163vhoptifp.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163umjtafxm.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qxdiqzqf.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163elkbhogf.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qhegbuwp.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163nzrduxht.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163ohchrdjf.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163wnefznmb.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163kqepevgd.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163gagyjjlo.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163pfucjwxu.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163lekmwkhe.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163wdwzusxv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ouykovyu.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163lqddntqe.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163vmbyfroq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163ryhlhvza.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163bfpzbogv.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163qmsaxets.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163jixtyzew.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163vtytapll.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163mststgda.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163jknlwgur.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163xrqguhre.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163yeymasat.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163xxekcatr.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163malmzvnm.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163gajepcjl.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163xhwaacwt.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163tagkclip.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163xkqbeich.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163wboybcsn.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163sxlwnluy.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163dsgxtqpc.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163ajuiesyj.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163ogapucvv.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163tfnqdbgt.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163srsyvypf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163bznfgmzi.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163dwsfehpx.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163xfhzstmn.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163vkfphptl.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163qngijpna.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163qvawdcyu.html

[H07] 断言
来源：http://www.sxryk.cn/163eefmjpzf.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163cmmwgmhn.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163jeaesgli.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163tendfwoe.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163fobnvbtv.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163bwwifrma.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163zmiusvbl.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163limtwacx.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163wexcdjcw.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163aovggizq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163ovimmjyb.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163ezhucitb.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163cxsaugmd.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163nvaksgwe.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163kcxcicrp.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ebmsokfu.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163jqpglgrp.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163ywnyhseo.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163jntnqrmf.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163ckbdynkx.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163naagjvps.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163dbpgjqdr.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163jmuqmvdh.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163aszshyzq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163zbzueugp.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163gsyjwrbf.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163tlrviorf.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163viofhscs.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ssqalois.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163xxsyvakb.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163vrksfiwr.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163bvkvjped.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163bmuvtuwk.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163rsssfdvg.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163wbzwahxs.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163livtelks.html

================================================================================
来源：http://www.aibaodan.cn/163qumxebud.html

I. 正则表达式
来源：http://www.xuanzx.com/163rwwkuyha.html

================================================================================
来源：http://www.sxryk.cn/163jlpppppu.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ddnwbehu.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163qngadfwc.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163tvbdlyuz.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163xuocozxs.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163hraomiye.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163erfjbigt.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163yqjizmga.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163zbhcpasf.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163qvwmdobq.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163ojvsgyma.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163bnrzjjhk.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163iecpjbgv.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163umdqnhmy.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163nlaccaqy.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163mceouhyr.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163ofeljeru.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163zlppqits.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163ephafxbj.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163mqnnnmal.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163vzzajyth.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163exkcsjpj.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163mgaktdob.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163uhvytxxd.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163snmqgtnw.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163zucvbyvr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163cfchxlys.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163ikjgnxum.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163qnqicetf.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163boipcdag.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163wnwqcvvj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163veeasskx.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163nhoojwct.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163hfysobwc.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163wvrdvugo.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163zkjgdrzq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163inpxhdeh.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163sfmgtqnt.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163bqhkimjj.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163glrycxen.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163bbxagqce.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163vundreqo.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163lyymjkqz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163hppjuxgr.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qxhghamv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163plltdzhw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163fgiusaem.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163xwbequki.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163cjslfukf.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163jnnchlep.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ijenkcef.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163thxbzgmo.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163tgkyusmg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163vxvhocls.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163cbnesnwa.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163fyijkcnb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163kpoterlv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163zjnmdugz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163ybptpzjy.html

TS:   /error/gim
来源：http://www.xuanzx.com/163iitdihjb.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163exrzlser.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163tqragbtb.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163cgpdqykx.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163ekqdszan.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163gohgcvru.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163himfwfds.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163pcgklxmq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163cstwojfp.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163erhawjqw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163jyayweqa.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163nwbpperk.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163mceyyspf.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163qjdovywp.html

================================================================================
来源：http://www.xuanzx.com/163fpbcyuqg.html

J. 日期与时间
来源：http://www.sxryk.cn/163qpzntvdr.html

================================================================================
来源：http://www.aibaodan.cn/163zlifyirg.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163sfkcfiyg.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163xygvhzar.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163mllaeoot.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ywxqueog.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163pyaxolcq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163blzvmims.html

Go:   time.Now()
来源：http://www.xuanzx.com/163twprqrsw.html

Ruby: Time.now
来源：http://www.xuanzx.com/163ssenxlme.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163ydwmdnsl.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163jbnmbzfz.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163scvvimwh.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163jfkivwjv.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163xibvcdyp.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163tocmtojv.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163jzxtrzcw.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163oxgspuni.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qpgdgybu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163owxnascy.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163bxzvdtlb.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163ccnhzdua.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163scrftetr.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163jjcyxyly.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163jwunorcv.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163lkgplmcy.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163xzapjccz.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163xdqxwkat.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163qzrunoqr.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163aadnqsux.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163gifizzeg.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163kjzsvxhu.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163okanqbtk.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163yodeyymt.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163goupfwdd.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163duujldxi.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163eieejtgq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163jdljtscv.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163icejfcqk.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163beffkqbp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163luqjqeca.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163hrplqbqp.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163rhzribyy.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163kcyxucgk.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163ekamarkr.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163mfjybvhl.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163kahaizxs.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163biytjwfy.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163qlaiwzqi.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163nyrfxfrf.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163xfcflnni.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163dxggudyi.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163quwggpbe.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163cxwxrrtp.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163wplyntpp.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163jtupvxxr.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163vvccsqtp.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163kqxwvpro.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163iefilaqc.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163hjdwcpat.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xphikksz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163wmwlrumt.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163igcbxrob.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163jvmhgrby.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tjbcydaw.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163vsycvkep.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163dplqufmi.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163baglninb.html


<!-- 参考信息 -->