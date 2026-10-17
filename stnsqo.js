外链999!wailian999！

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163ikingwka.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163zsqqiloc.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163fbrcgpcq.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163khluiyhx.html

Java: u instanceof User
来源：http://www.sxryk.cn/163rrvmjhdp.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163bfazgpkc.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163uhsylzkz.html

C#:   u is User
来源：http://www.xuanzx.com/163hpuucncg.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163fwwklcwi.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163ypinlabf.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163etumntmj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163kartyifx.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163tjrltbnh.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163hcnkymvo.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ghqntyds.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163riytpwmn.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163ybllnfpo.html

[G15] 枚举
来源：http://www.xuanzx.com/163bbthnxtr.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163bbtvqykr.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163syxpjugv.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163rotlpwmx.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163mkbhmaxg.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163gpbjbalt.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163njkdessz.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163lmiwxprc.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163szyqawnt.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163krtnodwl.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163glggjwde.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163mpsrhvjs.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163huwaycna.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163sxzevxjy.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163fwixesrh.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163qrkufpwg.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163zqaafqpf.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163gphfnkck.html

================================================================================
来源：http://www.sxryk.cn/163nxybfwyt.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163pprodeyr.html

================================================================================
来源：http://www.xuanzx.com/163ftfotfhf.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163iafpappn.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163wtxpmynr.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163wzfkytpl.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ktawtmew.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163yfrnwgik.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163hnzeslxp.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163ffbdzhvw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163woiowpib.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163bnosupsf.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163qyxqkseq.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163jygrvkgq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zvznzcsf.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ysxdvqwr.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dwpqkqgl.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ebentixs.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163zwcbztvy.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163jxmqzutf.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163wgqgjdck.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163lawudfei.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163kqxffgfe.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ifyfyuod.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163dhnyuydf.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163bgsxgupx.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163hfypfqem.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163dsttveka.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163nexsgvpt.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163esvxhiti.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163ohvztnxo.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163aafcovcq.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163wfvwxwkn.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ivlulexv.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163swnaolln.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163gjezmdgq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163jgnfbaqj.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163dduskrdd.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163kbhbbbcl.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163mhkpsayw.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163pwauqbjj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163zhqmexnz.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163hqgimvvn.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163klpvkdhw.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163komlykyg.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163petqubjm.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163jytefftg.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163qxatfswg.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163lrixhctd.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163ekamuoov.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163mqlhjudj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163yxjqtyaq.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163tvjhzlfk.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163pqvevtte.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163ougsfqwz.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163osgpsbyj.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163lpyoibhr.html

[H07] 断言
来源：http://www.xuanzx.com/163ybbimfzx.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163czkmesfw.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163cdsuwfgu.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163torylfuv.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163oncswclv.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163sfsojylz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163sajxwleq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163wcylqavb.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163rsxmufor.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163gfrfqbtd.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163kxdxywml.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163czostiek.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163zogwoyjc.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163xmdzcren.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163nkxylefs.html

Go:   err.Error()
来源：http://www.xuanzx.com/163ululdepl.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163trshrgxj.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163euhvvftm.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163xaknmrxz.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163nulqqecj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163xqwmmhhh.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163cutcegak.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163zbpzdurs.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163vhsevmmw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163zdiztski.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163bndxzjif.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163cwqltjhx.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163uhiydjwy.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163laavboof.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ndsratyi.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163zvsjpapq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163aebpdoio.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163mjezzxht.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163apzhogfu.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ruozvifd.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163kqiyzbvo.html

================================================================================
来源：http://www.sxryk.cn/163xexmepml.html

I. 正则表达式
来源：http://www.sxryk.cn/163ovjffwju.html

================================================================================
来源：http://www.aibaodan.cn/163qgknbqea.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163snrdlpig.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163mbhqbsve.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163jazlxjtu.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163jicviidu.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ajbxwjwr.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163iypqjwdl.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163oxuccbxf.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163ojcphagb.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163qxkskztx.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163qputfgro.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163tlotfwlk.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163ykdbllsz.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163zshsyeqk.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163kiqkzupq.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163lwiumiiy.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163laoltxwe.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163jbauznhq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163xbptnzva.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ylbrlcef.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163wabmnspm.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163ollzmwio.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163hdxhxiyo.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163viwhrusg.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163cjhlrghx.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163ouciqnaj.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163qljitzrk.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163omebtbnp.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163mkdbppmn.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163vprolbuk.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163iaoxpfww.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163wfvnllld.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163xlszkhhj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163pwmpwgyk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163qzpxgkqi.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163famhwtse.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163ptrowzza.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163abbisphi.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163srdjlscu.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163zbiedqcz.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163dcovgzap.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163tnrrxztb.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163toasffmy.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163efhfayoz.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163iwvmnaxf.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163uaofcsff.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163segnihub.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163jyasvhbk.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163hpjznvat.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163vafeqhao.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163qvdozqhq.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163dpelwazo.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163zxznrcwb.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163uuisgaaz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163kvfatbrv.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163gmzoerdj.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163yidzrxoj.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ltjctjdw.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163caaurgzl.html

TS:   /error/gim
来源：http://www.xuanzx.com/163mxpmadft.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163roetmsgg.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163sytbsbuq.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163wisbbykw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163lfsjmtfk.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163ozrarcme.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163wvbhdsow.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163quwztciq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163lhrhjtog.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163hgwbjqul.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163ntbekafw.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163eifbcrdf.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163dipwbfrs.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163irubuurr.html

================================================================================
来源：http://www.xuanzx.com/163bjdiecpe.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ldshspjf.html

================================================================================
来源：http://www.xuanzx.com/163mdwiqwtl.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163nuhasiyo.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163yuzvnkne.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163jfeyiugn.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163xeghnstc.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163onlntsyy.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163auzxuajf.html

Go:   time.Now()
来源：http://www.xuanzx.com/163fqcvwrmp.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163rzjdlfpd.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163yuvsbcsl.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ogoxbniu.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163srqokddn.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163gjkepuhx.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163hvfvsbwk.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163uszpzdyn.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163amavhjna.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163fnntsykb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163annllknz.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163aymxktuk.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163dtbkjiuv.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163dbybwwcw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163kumvzxdz.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163vsgvopba.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163lbjomybv.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163scxhdpnj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163eludkepi.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163xnkaykbr.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163qrqslonh.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163epzykitz.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163oamxyioh.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ffsljtdh.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163phlsnest.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ehepkkkl.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163htfwadof.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163gmvlttiy.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163vitxkjgo.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163enhtfgst.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163iqqxbrmw.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163htuzlwxl.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163hhhevvsq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163arhqiroz.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163vxrgrgpx.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163tkicqwzy.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163tesabqdl.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163dgulryqr.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163cycxxbdl.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163fcipatca.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ekqaqntm.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163bgfhzuiy.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163gzojydzk.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163dqiwmjzh.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163qaesypaf.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163nwtepjaz.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163ybtqsrpb.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163ctkxahqs.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163rihwwzoe.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163tfleemln.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163zzjnwpsn.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163anfneogg.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163cnnlzxcj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163uinynujw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163vxgbwzkl.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163uakjjooo.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163uuiskeex.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163tnsfpted.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163kkxikrma.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163pfmkimth.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163opvhywuq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ncgikeri.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163itvggfpz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163dyyrlqxw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163eswaodkc.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163btjxrxry.html

[J09] 时区处理
来源：http://www.xuanzx.com/163fjqlnbaa.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163fepdiand.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163kjxiyadn.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163eiznlekx.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163fvvrulxt.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163wpwjeyxx.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163jwrctqtl.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163rqsvyhqs.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163mkeevmed.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163yvzkxudt.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163nlwhjbft.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163nwxpugpm.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163ptailwsh.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163mvpiozcr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163ztylqwjb.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163emyvrmkg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163cmcewebu.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ilvxoart.html

================================================================================
来源：http://www.aibaodan.cn/163tcjwgfjp.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163cqnhmejv.html

================================================================================
来源：http://www.sxryk.cn/163tkwkxbvp.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163nrmmfpwd.html


<!-- 参考信息 -->