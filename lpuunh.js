外链999!wailian999！

[G10] 访问控制
来源：http://www.aibaodan.cn/163twilrhft.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163jwfpzehd.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163pcneoxuw.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163domonmhq.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163uahkiumc.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ibcdxzsl.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163hgamyzcx.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163mknzgfmm.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163hmdnlkbe.html

[G11] getter / setter
来源：http://www.sxryk.cn/163bktdkdzo.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163gysgmjwc.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163lyurxdoz.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163qnwsheex.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163awblyfke.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163dwuycdzh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163mqkndnvl.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163aehyjdxp.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163bcqhybxa.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163lpuwvqvg.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163bpxmgydf.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163bcocdwii.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163pnnuoqhw.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163pcmwqctj.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163zihymcui.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163xfsasezq.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163kszvmdfs.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163cihgvnvx.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163qxjepytb.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163grvfeawu.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163ibwwjsks.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163ezlughbr.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163ebslfqps.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163zhppbgna.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163rtdnpfqc.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163qpjepuop.html

C#:   u is User
来源：http://www.sxryk.cn/163vqdarswn.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163bfxvdvep.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163eermxpwl.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163mgjyhiga.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163fadmbfao.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163vzjrgfhw.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163rwxgwoqm.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163mrdesfpx.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163yagsghmr.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163hwceunkl.html

[G15] 枚举
来源：http://www.xuanzx.com/163orgpnyrm.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163rsymndwj.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163rjnsuukd.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163enfisfjx.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163fchjwjtl.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163oexyeejs.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163wjetbhpa.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163vigffdgc.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163wzfhxgdg.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163firphiqk.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163xzyydlvq.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163neeylpcq.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163cossxqmh.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ehhyoijx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163xuazhlyy.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163qpyvzcyl.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163rsdtnwzg.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163ilezdpyb.html

================================================================================
来源：http://www.xuanzx.com/163ygzajayg.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163ofkfxxdq.html

================================================================================
来源：http://www.xuanzx.com/163mvddofzm.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163yqbzdrps.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163khqwzslv.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163gatvpkvo.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163pzxbnqxz.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163hebhglyj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163urerczxl.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163dprvhshr.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163xncsrzgz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163odbyntiv.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163wqsitcik.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163yqefmbhj.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fpbysszb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163owpnvnok.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ckruazkc.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163inhktjdq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163fdpogukk.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163kgjimrvv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163qsnafjnq.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163tdiaziia.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163xaezxwcf.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163tpzozoqv.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163mivlddsg.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163frlhbnve.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163lqnidnyk.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163cxaabsuo.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163yjgssblz.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163hyxobgmm.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163ocqnnseo.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163emtgkwhh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ftffxflj.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163xdcruyqh.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163zjryvnxf.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163cmlpreim.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163dmlmhaxm.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163sqayglgy.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163dvvvpbjv.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163eoepncqz.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163lpfdppbo.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163fdzryodg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163nprdbsqh.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163qtmezpsz.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163qbnntjcr.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163vfkywsch.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163plqywruv.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163ktbrptje.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163qrpccmva.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163xapziwub.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163guyjhdzi.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163kgsoaagx.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ysadbdqu.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163osnfhnet.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163mjgkdbnw.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163wttaozxc.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163kpzsgvhx.html

[H07] 断言
来源：http://www.aibaodan.cn/163fwtwogha.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163ffnnlohu.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163cetphyat.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ptevpxod.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163melpzuuu.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163orosnoic.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163tckimytv.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163ebhoocqw.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163qzaothyh.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163huxbwcbh.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163nthesueb.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163qysynghg.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163fwjkwgqz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163zqqbsvbg.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163hmzmnvpn.html

Go:   err.Error()
来源：http://www.sxryk.cn/163pbpkkxzg.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163rpuwqngj.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163crvvtxrn.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163sojsgkhg.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163gfknnagj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163wufengdy.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163gvzobshy.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163dddefeii.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163eesagqfi.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163xuahjuav.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163ukyrktql.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163hlhkimdm.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163mcqvqjyz.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163skiogaru.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163gopijcdm.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163hgmggpir.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163gdghcytt.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163jnifhmdr.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163htozclpp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163dqniqujl.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163waifcudf.html

================================================================================
来源：http://www.xuanzx.com/163kefpjftm.html

I. 正则表达式
来源：http://www.sxryk.cn/163dbwixmiw.html

================================================================================
来源：http://www.aibaodan.cn/163ghmudxzk.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163hejfraxs.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163ktwxbrlu.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163ijbbjcnz.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ibmbsnuo.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163jqwpoyvi.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163kyejmpby.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163ehxjcesm.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163htjkuqqx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163fgplpiid.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163njczphku.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163jfrcrjun.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163hbxdnqub.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163bepdqmrj.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163zigcutot.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163bjvdtxcj.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163doehntec.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ewfbcvwc.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163uvuxqkte.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163eemwadns.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163jydhykfm.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163aluboawr.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163tzuvyffq.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163qelvdogu.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163rezaubza.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163obakruit.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163amxlwrfc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163jpjzntph.html

[I04] 正则替换
来源：http://www.xuanzx.com/163hyyhvljs.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163cmqlnpie.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163udbnhnps.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163eimiiwnv.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163adolnfcm.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163frovhjxp.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163mndsdgwv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163thmnospn.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163ugomjfkd.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163qjeaaeke.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163kddfiqyj.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163bwtkwjwh.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163oxqwvkhy.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163eujsosnh.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163hijqwftg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163ttmndmox.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163kmtsjhfn.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163fpahgago.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163uyvaislv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163caxoscko.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163tpdqivyw.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163wnfkgmka.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163dhmwdscq.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163rrelbpmt.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163cczausdt.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163irbuaeeg.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163lldnrgwm.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163vtplhgqq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ggdiqomw.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163vrkanvna.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163smiktvms.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163mxwjvyeb.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163hutlmapm.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163cfydlurx.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ooraedbj.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163vdlpyjhf.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163ohglxjak.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163wbkcrdqb.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163xxobriip.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163gygvoood.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163quutulqk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163jpplyeri.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163obfomdbs.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163lknfhptr.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163lmpsrvob.html

================================================================================
来源：http://www.xuanzx.com/163vzqsxrvl.html

J. 日期与时间
来源：http://www.sxryk.cn/163mhzrpvbg.html

================================================================================
来源：http://www.sxryk.cn/163fmjndqdl.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163zynwisbn.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163bblhwtum.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163hwmbqjwp.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ytgnzeer.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163rrlcfizq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163jucygvag.html

Go:   time.Now()
来源：http://www.sxryk.cn/163byqwphom.html

Ruby: Time.now
来源：http://www.sxryk.cn/163zckkkmvj.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163kffirnfi.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163gjafuddj.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163dqqkzcea.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163anufvyzd.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163beykmdsx.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163ogljsgbg.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163gopdwrmj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163fcovwsxe.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163xgtqnmpn.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163ifwcvtad.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163tzdjlmvd.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163ixwqjtuh.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163kwwjsixg.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163dqchdike.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163efontzlz.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163puqovxte.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163tbqpjfxv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163airvkkgd.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163hqjgkowe.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163bjmawrjs.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163hmshkumg.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163xwplkqot.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163onpwltaw.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163acojlmml.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163bggiqcdv.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163hcpmvabf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163huobqwof.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163hqiyxale.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163nsiwgbga.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163pdhslybv.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163jgltcrdu.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163flcnfdvo.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163vlkoepkf.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163yyrzbzae.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163sxrffxjz.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163zrkszxmu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163dexqpblq.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163zbhdxwwx.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163nlvpiath.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163ahpoobaf.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ikmhvben.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163vrpnrfnp.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163xvmnkrwa.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163eaukywcn.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163jpzzaynh.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163xkyqfmpt.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163xfyidyeq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163bemxlzqv.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163vndzzprp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163tmtbnbpw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ojgqeoho.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163fuscjbyx.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163bfzshccu.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163aunwbdik.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163tlgajjdl.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ydfoqfqr.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163dnfhuitd.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163tcvloncj.html


<!-- 参考信息 -->