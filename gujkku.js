外链999!wailian999！

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163slgsyfld.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163bmfpcypc.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163fxwksxep.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163arnlyjcm.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163oknxequm.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163rlntshxc.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163whlhahuh.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163jbmmilfm.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163govwdsbz.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163oriearjd.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163nsqjgaia.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163eizlwjoy.html

Java: u instanceof User
来源：http://www.xuanzx.com/163azlflwti.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163nimnrpzo.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163bzjuukhp.html

C#:   u is User
来源：http://www.xuanzx.com/163lhizbgpo.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163kufewobp.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163jucdkzlo.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163ivcpydss.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163pemyrhsh.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163fegmazbu.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163qkurxrtx.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163lzpyfiqe.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163zjamsktj.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163wyqmawjb.html

[G15] 枚举
来源：http://www.sxryk.cn/163wfvustst.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163okblysvc.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163hjgwycqm.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163nxoktrmi.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163fgzamzyb.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163xjlowvqj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163axovseoj.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163qmzersxc.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163jpznphha.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163hgbkcngg.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163cwoxlmdk.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163xihvysjt.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163meompepb.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163barazyno.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163inugobfu.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163rkshkacz.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163zxchwxda.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163fkfkqonh.html

================================================================================
来源：http://www.sxryk.cn/163rjqrfopp.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163ttngvtny.html

================================================================================
来源：http://www.xuanzx.com/163rmcioyzm.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163jghombws.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163sayvzaqs.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163ywtvamuz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163onytzuos.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163liejlvrz.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163ylsfpkqu.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163uggmoeal.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163rwbpkvcd.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163doudgcvm.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163aosiccbw.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163debrjjhz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163aayfdooa.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163sgnwcqnt.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163oflvtuzk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qbmqqzzl.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163btjmkugm.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163lndiavjw.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163dlstvygo.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163zufdexdz.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163ygyoogzl.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163csjcwlsk.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163bwavqbbk.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163midbazok.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163igtrfqmk.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163fimlwxqv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163dxzlofts.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163bfmthwyl.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163zahqazdq.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163lpriqduo.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163ichojpqg.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163vcvpukew.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163wdxbgvmz.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163anonjcxd.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163tandxyof.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163xvnmauss.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163odvtzcew.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163czucpjtq.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ukbuqpxh.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163udfbdlan.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163bqstypfe.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163qgcmojym.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163jtbxntbo.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163rcnyxocl.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163marrdppe.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163ihfpzhui.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163pojbvdrd.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163otjqcrcu.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163bdmofyuk.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163rdfzqblf.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ovfhmrgb.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163drgcapbu.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163rmbcebnn.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163pxqfmbau.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163mqkmlxqe.html

[H07] 断言
来源：http://www.aibaodan.cn/163sliuswxc.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163mhkhtysj.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163vxmoijum.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163onsxpcxe.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163gnuepnto.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163ibfnrtac.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163htycecav.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163ggqsalya.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163qvpznobd.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163ycfcxbcn.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163nfabduqh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163skzwknip.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163ewmcsdrw.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163oljgshin.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163anmxneqj.html

Go:   err.Error()
来源：http://www.xuanzx.com/163kshktmye.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163dnbtwjxf.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163urcxfxjl.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163mmhjuhlb.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163yntsqzez.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163qmdhoeyo.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163kotylmng.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163emhbgsye.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163bfairysr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163bahkobwb.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163fubkeunl.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163ohduiabr.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163ohvxsvui.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163pdvypoce.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163berkboir.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163lqziieys.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163jrxziwbo.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163jslxvqro.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163mloesfmx.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163houarozq.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163hjkeeqde.html

================================================================================
来源：http://www.xuanzx.com/163fvndxser.html

I. 正则表达式
来源：http://www.aibaodan.cn/163pdjpcfje.html

================================================================================
来源：http://www.sxryk.cn/163khalyuuq.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163yixfapwx.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163yiuwgfwh.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163pqwxfhek.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163pzemuzte.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163agfymeon.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163ywlhgkpc.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163wtktsfyy.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163dbsjsqxs.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163bguebddd.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163mclcbxyl.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163ntjkrmvm.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163bstqhlog.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163wcvzfdql.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163sismjmjs.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ogkwofbg.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163hybvsyxf.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163jclmgzsq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163zptbtqvt.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163uctniekb.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163rudgxyyq.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163myzhscmr.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163fbyjwiqw.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163dhdnnjmp.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163qkutqgww.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163oyusnvtp.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163zjnhdjbu.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163xihksgks.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163ogqmfkxw.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ffezrjrv.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163maudegsl.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163umhbywon.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163pvasjbfd.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163cfkwjwdt.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163htijinno.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163phhzcors.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163vxdcwpxc.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163nmpionyq.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163bsnrmwqx.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163erqtcvyb.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ezpelcnj.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163xkqiegnp.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163mdztffow.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163ikqmlfdb.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163iykzvkio.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163fyvwejay.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163lxvywzit.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163yqhonenv.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163wqvpkfhn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163fltheclt.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163veissfsi.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163mftabanb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163gwzmhnfm.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163reutigmb.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163azoctmod.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163pnruxopg.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163sminruml.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163mkabiaax.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163wspgdanj.html

TS:   /error/gim
来源：http://www.xuanzx.com/163fiavvngr.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163hiiislzg.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163ntlbherp.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163fzwkywjb.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163ibdqdqwn.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163xehnmrgv.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ixvjtylx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163higphekd.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163mkkrnlvo.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163mqrwpqtb.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163ljjhmxvc.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ivxmxxqi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163riqujogo.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163fpeqccbf.html

================================================================================
来源：http://www.sxryk.cn/163qxmdsgjq.html

J. 日期与时间
来源：http://www.aibaodan.cn/163muunzhec.html

================================================================================
来源：http://www.aibaodan.cn/163hpmialet.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163usdupszx.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163scliiccm.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163pluoxvwz.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163sjifntse.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163wkfexvkc.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163rutmicbz.html

Go:   time.Now()
来源：http://www.sxryk.cn/163jtssiucr.html

Ruby: Time.now
来源：http://www.xuanzx.com/163ktiigqlm.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163ftorfdcg.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163menauzri.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163agjmqlvc.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163wwbleixi.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163otxxfnlx.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163jhxbmgov.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163chiinkto.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ammwgova.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163naxtqzzd.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163crccthoi.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163sugmiotf.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163ptaqgzwo.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163wcpelelw.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163iqicmplf.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163eprwbydo.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163bgakdzso.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163vklqlpfc.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163mvgasnyh.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163tsqlomix.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163fdilxiux.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163vietbohv.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163lsrivtum.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163hhxffsld.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163kxgqykdm.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163zdjfqtae.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163wigpfpzo.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163makezlpx.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163edsaavvn.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163hstiabop.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163bojcteeu.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163fojihgfp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163vylhxgok.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163nhkopnoa.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163ldvtknci.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163zqhybuux.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163aspkmnym.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163uwvczidc.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163sxnnobjp.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163iglwlvwg.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163xcnsqazj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163pxownawi.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163pdujaqsc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163jypeuqcx.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163evebhhlu.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163auhsiykn.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163vpatwoqn.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163oizvmunb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163jfyvjaio.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163hnokorof.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163hbaplrcq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163pxkbjcmq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163vveialco.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163ozblwiht.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163spzitssq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163huseiujc.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163byachock.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163mfhbzlez.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163fjajdfss.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163uxvasqua.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163rdtslgdb.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163jpaynohy.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163hjxbqjxm.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163snrhpwei.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163rvyrpaaa.html

[J09] 时区处理
来源：http://www.sxryk.cn/163mhtdvhoc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163xzrgkrkw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163bekjzyle.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163nllurqew.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163iafyjhuc.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163cmyafuzj.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163wmsbrzfb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163dbgpbcxj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163kqnqbhqq.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163piyzdveu.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163fuqgaasn.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163pcwnkcok.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163dlgjyppd.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163djihcyan.html


<!-- 参考信息 -->