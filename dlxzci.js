外链999!wailian999！

TS:   public / protected / private
来源：http://www.sxryk.cn/163ilkaoxog.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163nkwqbbhv.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163potudinj.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163xcdfhhvy.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163laioruol.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163snesehlw.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163avhnimjb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163aafvjtbu.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163auejoexp.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163xrtirugg.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163nwhcbkzu.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163pevkkout.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163xozdwbbw.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163twceuhkb.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163lxabpwqm.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163owbrpuyc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163zeprtptx.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163sjavmoph.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163kdgedxwn.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163ltxjajjn.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163gvqeqpli.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163waesjbwo.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163sgmfmdeo.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163rtyzyvel.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163exmsqwln.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163eajbnagr.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163kaiilrdr.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163fwkfddox.html

Java: u instanceof User
来源：http://www.sxryk.cn/163jnxphvqq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163iooagwxv.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163bawqhkaz.html

C#:   u is User
来源：http://www.sxryk.cn/163qsawfbfu.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163oqglvwrq.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163fmupyvla.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163srhdtdcp.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163myaqwndc.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163znxwhuvq.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163cxepikdx.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ceirmxlz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163falpnhyr.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163sscftcbs.html

[G15] 枚举
来源：http://www.aibaodan.cn/163ifrymggz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163kmnvbkbx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163sktqwsyn.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163qddwjzql.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163fiusfjls.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163urztdfyx.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163fbymermk.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163hjiqbkkr.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163nycuwdto.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163wkbzipqw.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163plzkince.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163jxampjtq.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163fqnhsxen.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163gbbtxmzl.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163xjnoiwwf.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163nieejmmm.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163kpcjbdap.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163pbjddldo.html

================================================================================
来源：http://www.sxryk.cn/163xwuyeukl.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163ffwtuuxk.html

================================================================================
来源：http://www.aibaodan.cn/163gpakxuqy.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163ywpfobhj.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163wetpftwl.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163dnxvywpx.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ngipvxmc.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163wuligiek.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163mxpkpcid.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163gvrsrgrj.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163onaesmjo.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163chpfxsgr.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163fglzearr.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163erpepjan.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163psqnduyx.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163mqdvrlcu.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dziwpkgd.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163omkbxquf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ecsgksou.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163vwfazbzt.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163fmberhdg.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163zzqvkpkz.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163qomzbctn.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163mrtsvdfg.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163nxgofmod.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163hjxsmcgs.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163txadrlys.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163vfbvvjxj.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163xtswyqeh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163fuqsxjwh.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163hwzgnooo.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163nlcywagx.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163varmxrbf.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ikgvqsrx.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163tskcbugl.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163jmgegdpq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163vurxsmia.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163cydnkkqs.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163wbargjvh.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163joioiuip.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163gienxqjd.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163covqamwf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163tyhhiezk.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163rqfhnxdg.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163openhfvn.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163jiincjsr.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163vnaoctzk.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163qzqlnxoa.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163bqacvxaj.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163trgofuvt.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163wxkqgqmp.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163zobqsahm.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163hxfkskbw.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163trmyaewr.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163inbinofw.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163sahcnmrt.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163tubnocdh.html

[H07] 断言
来源：http://www.xuanzx.com/163dvgtsdnv.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163ftygiwcy.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163bhjnfeet.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163mmugdvrx.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163sgrlaspr.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163csduyjqb.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163oxmrzgfe.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163qkxhjhcc.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163qkqxhher.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163ohyklflf.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163oslbazdb.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163wgvauvei.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163lsxqimtz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163odvdmrhy.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163sdtazckl.html

Go:   err.Error()
来源：http://www.xuanzx.com/163aykqaixi.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163xasnebzu.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163eavqqbiz.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163pxoscdei.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163eorrjpwo.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163rfxiplaq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163dqnzruyu.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163lbgltpbc.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ccwhtvip.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163toeqwgjr.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163jibxqiho.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163qxydgjds.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163hrgygqqn.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163sjytrpjl.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ojfhwrps.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163whvlwttf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163fqzvhpad.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163ryhbyscn.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163cxicapzr.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163qylnqppw.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163zkczalga.html

================================================================================
来源：http://www.aibaodan.cn/163rwzmepds.html

I. 正则表达式
来源：http://www.xuanzx.com/163xlkgckju.html

================================================================================
来源：http://www.sxryk.cn/163wgnzpjel.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163buwtgvbz.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163rmyxhlgs.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163inisqfae.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163vxkrdebn.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163yzjblaop.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163qeogkhzs.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163cuqpffxk.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163jyfvwvko.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163qantzpma.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163frykejfl.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163lbtbkvob.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163xyovumju.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163yhfscxsi.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163bubvnnjz.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163nhrjiket.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163suvxgufq.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163swprugyg.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163obvibhvj.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163pbvpxguv.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163inmiuwtv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163nxkxozxz.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163gwhizlrx.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163ojqudrwc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163gfbkcqax.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163vkrumqhv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163vpwamyhu.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163xxvqpihb.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163dasjyrfv.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163mclwxybh.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163qdpiwhjn.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163aylkegfk.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163kevtugcx.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163zohpmbwh.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163aetnupap.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163uvtlpxpq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163bdvqkzaz.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163ixowgujb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163dsugwmoz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ifuutyaj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163bqbwztfm.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163hkxakhop.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163qrcxtdyl.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163bkgcuyxr.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163hudcfawx.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163oaslnypf.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163godqymjp.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163okrckprx.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163zwlxbimz.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163cqhyscmf.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163descelyz.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163zniqadse.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163yntdbdwl.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163piccklkz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163bxnfaeyo.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163jfmgeldk.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163proxtlby.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163crgjeajr.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163gbdhsgni.html

TS:   /error/gim
来源：http://www.sxryk.cn/163tzutmgwa.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163ngjulltb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163gplioshe.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163qohczofz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163azdwhebv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163dusxiyav.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163gnwlkrzk.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163zgmtpbux.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163chdydljp.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163jnmzzdsw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163zhmfyetn.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163odlfkihg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163txkirrxd.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163icyogkdk.html

================================================================================
来源：http://www.aibaodan.cn/163gnnsdsyr.html

J. 日期与时间
来源：http://www.xuanzx.com/163bhddtcrx.html

================================================================================
来源：http://www.xuanzx.com/163rpmcejch.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163lxwlhqlr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163uoxihtnw.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163lfpsotcu.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163esrtrzrh.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163fujqzssn.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163vqojaslo.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163ygxifvbg.html

Ruby: Time.now
来源：http://www.sxryk.cn/163qlppanqf.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163arqwuqtk.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163oejunwwx.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163cucdrfmk.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163bueigatr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163tvfiiehw.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163tbmiemsz.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163wjcqgdeq.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163hecbdhbr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163muxmsvgn.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163zvfqvimo.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163uqjxodtr.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163nabuzqtr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ljvaogej.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163pooqpmjw.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163oonslmcz.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163oqoeoawm.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163waebtpee.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163mpqonkwb.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163pypjfeek.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163mqxzpyph.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163iwdesksu.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163qlvhtnba.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163tcbpejia.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163gefupoeh.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ntphxqty.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163wvalvkyj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163mzpzgxnd.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ylcargvu.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163nyziunhh.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163tvvjolci.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163wizpgwdm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163qpmjsixk.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163pcgxrchl.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163pltotzyt.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163gyvqvqud.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163nzuuqktp.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163oqigayct.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163dkqqafgk.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163pqtirpeu.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163lzbvekjp.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163tealwrpi.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163gsbmgmdc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163krtyspde.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163uahxwqyh.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163gliestby.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163yxgwtnhn.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163axrjieor.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ingqlipx.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163jtvdjhfp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163yolfeftf.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163zrpnussx.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163turjznpn.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163jwiczlmj.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ehkjxlxh.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163mfhbllnn.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163hglakyix.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163zzfuhnnn.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163auivovse.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163mhmuclfy.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163ojdayneg.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ldbazvwz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163oslwyzub.html


<!-- 参考信息 -->