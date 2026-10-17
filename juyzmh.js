外链999!wailian999！

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163mrlokpac.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163icljssfv.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163kspvefgk.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163kohwspko.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163detrwikm.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163qwngvyvx.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163yzrycbsw.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ndeqollz.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163bavwastn.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163wyxlclcz.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163gyzkqduc.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163thwipprd.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ooipgckt.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163accyixsk.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163nqizggmu.html

C#:   u is User
来源：http://www.xuanzx.com/163afbjtvxc.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163baottveo.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163bvvgcmao.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163voouxttr.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163axxbbulx.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163kdfrzcoa.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163jhahohzv.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163ciyvuuzj.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163uvgmqgpy.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163ryfomwed.html

[G15] 枚举
来源：http://www.sxryk.cn/163wwqudkei.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163dtwfaxiy.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163vnlbstby.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163fawnjxcc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163sczufimd.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163gpdxkltt.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ptlngpai.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163wvcrrumm.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163eqzjxrdu.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163hrctzbik.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163uvutcwwb.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163fwbcxcoj.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163fpmjrswv.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163mwlkyoep.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163fzxcbapw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163ydchijbj.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163xsaexmcd.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163fggxcubt.html

================================================================================
来源：http://www.xuanzx.com/163jdwhcvdu.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163bdwjyohp.html

================================================================================
来源：http://www.xuanzx.com/163dxqlqgtk.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163sewjghte.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163nxykklsh.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163wymkmhim.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ehvfxspy.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163keiqgenx.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163jzhkkxuc.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163rnmlgryi.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163tavbsuwx.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163zgcatclf.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163ocwhwgvq.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163wkjjuxlo.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163loizrylw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lcgdpbjh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nlaapwzi.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163twlaveic.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163jwmlpxqf.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163geawjcqs.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163ibqzavie.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163ovdjjrxl.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163chhjxclr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163ypndaacd.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163pneskttq.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163jcnzyjvq.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zhfbdxvy.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163hpznpdid.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163xznpjvzh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163vstljwyc.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163xvpuylyb.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163syrlpkfv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163qtzwsvsh.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163vgvqwhmp.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163hkcqdjyx.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163zcfgqroi.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163njglfbbw.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163nmkpkely.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163lrdkmuzy.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163gonhhppx.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163rxgrqeic.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163gsqslrji.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163hqpkfgqj.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163abvkopso.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163alujsivf.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163khxlhekf.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163ifihmgtr.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163idwzorgd.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163swelynsp.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163tcdzjpcm.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163bhthjjdb.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163lmananrj.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163lompkwln.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163kryrtwwm.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163vgbfafyy.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163hgmyytpb.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163pptsmmjj.html

[H07] 断言
来源：http://www.sxryk.cn/163txtwxhdt.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163cuanpmnw.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163tfbbkxsf.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163giphyjdo.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ezuuvles.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163jwehbhyt.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163bthtoopf.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163nlfaurad.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163gtfrzaeb.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163xipvgdjx.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163klwmwaxz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163jnzooxat.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163btjwbmlo.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163mnyuhurj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163zpvtccdy.html

Go:   err.Error()
来源：http://www.xuanzx.com/163kdnditgt.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163nzldlhju.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163muksjieb.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163fshgukbz.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163izvbsvrv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163xqniifaa.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163xeryqcud.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163ltzulvxk.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163lkogcxlj.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163rhzafijv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163fygecgoc.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163vkijwaet.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163xhuqsqju.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163zphfddal.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163kalbdyli.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163fpfoufmh.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163mvidvrzk.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163jiqdzynk.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163zsquasno.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163egapflyw.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163floicdse.html

================================================================================
来源：http://www.aibaodan.cn/163mjsmhebz.html

I. 正则表达式
来源：http://www.sxryk.cn/163tnjrqeoz.html

================================================================================
来源：http://www.sxryk.cn/163dawahclz.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163osuugmts.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163ldgrixft.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163qpyotadq.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163hlletfpt.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ibilhgyt.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163onpusfpm.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163jevgefmy.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163mcnwqrso.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163qjqeatro.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163mblntnub.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163fcdwpsqm.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163vxokovna.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163aytqfqxn.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163rffghivm.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163hpqfctmg.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163wgxpiayi.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163gkxyuoiv.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163vwtcwefa.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163pzeeigaa.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163dkahhvqf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163phcttnkk.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163vihuahvr.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163rgkdytrp.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163pnryaybo.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163nhdrzzhb.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163ehtqbgrt.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163kbdbsirk.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163quycsdfb.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163apflshah.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163tshsxmpy.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163qkbalreq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163mitdrlih.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163lhfhdocw.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163lghnubtv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163znduexxa.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163lcryhdmk.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163fykjebvu.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163ntypvswt.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163irvbemuq.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163quwpreay.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163kizlettd.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163paafmiks.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163ikuowlst.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163rgcexanp.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163etdumbzd.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163ybfybbfq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163qeykqswr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ndbfamrp.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ghlbefdy.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163rpakrfru.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163mpimwhfb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163txzhfqof.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163acrarawv.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163bynlrwxa.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163jxujwaqo.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163fahzhifv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163ybdueduc.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163nnblreah.html

TS:   /error/gim
来源：http://www.sxryk.cn/163xwagcsyu.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163loscvtfq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163fajmzymb.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163uqwiwwcw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163expvntju.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163kfmoplun.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ockklcgq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ddohgxni.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163hqsumrmr.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163cufgbvmi.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163jtduerqu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163fjjwpnsw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163stbkftcq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163pzmmjexj.html

================================================================================
来源：http://www.aibaodan.cn/163jjbtkate.html

J. 日期与时间
来源：http://www.xuanzx.com/163xiglxlti.html

================================================================================
来源：http://www.xuanzx.com/163cgqgcsbk.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163lykxgdyh.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163pyjwppfn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163yqcoavcc.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163mufapvfi.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163gyzttfvc.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163solqqtwk.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163jqfefrlz.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163jxljcsvq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163vzglnybq.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163nrzqxfkt.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ugpafgbn.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ohqjvpwm.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163dfnbmcat.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163bsuwnnke.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163iaeaplcd.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163uhzpdiud.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163iwcfkipz.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163ojgiwnnj.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163kowkfkeh.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163oyyyoksa.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163gfkzufgq.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163nqsfzxkg.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163gdnanwrb.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163epzfulwl.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ntbeohvo.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163jqezbsli.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163fgjdvxed.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163dtmynnrq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163tkpoktys.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163bqadcuqs.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163jnpmxjoo.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163aoggyttn.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163slbxjuyj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163hdcmfpvk.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163htmtsbhf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163pqznmlqr.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163tpkhqiez.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163gopaxhkt.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163qkcnenas.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qxmajzqq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163wppcbths.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163jphhcwqj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163fxptkpgu.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163qiaxlten.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163semapnxr.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163lbjbqdnq.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163jxkqwsap.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163cfzydwgy.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163umvczwni.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ysqrsner.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163qqjeitob.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163lohvkikc.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163iebdwexl.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163kngplcnx.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163zedaycet.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163wcpedosm.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163pjqufdmd.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163wiulitce.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163dudkxrij.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163arcvuioz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163ustxzxmo.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163pmnqclrx.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mddowrbe.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ftwvmzqx.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163iegmyrsm.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163rgryatyj.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163jbgbcccv.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163wahzcpmx.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163mevgaxuz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163njlnsams.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163lyuwlnbu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163bdovddtx.html

[J09] 时区处理
来源：http://www.sxryk.cn/163zkibqoej.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163jrlkwful.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163deaurbof.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163wrlamsnz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163uouicjwl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163tdcmztaf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163pdtdnpgk.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163hzcryyig.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163xtmdcrke.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163kupgcxoh.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163rtuwbiyr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163jdosaorq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163utcozlbt.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163ojbepltn.html


<!-- 参考信息 -->