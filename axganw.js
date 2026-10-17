外链999!wailian999！

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163zrqteqli.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163eaidulkp.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ajrjtott.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163ijeofxjk.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163mniqrbqh.html

[G15] 枚举
来源：http://www.xuanzx.com/163msivwclw.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163ewoplqel.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163tldogemq.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163uyhoyguw.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163efvcieyi.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163wturqqvj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163gwnnivvs.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163fjeesnsf.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163utqiyjrd.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163blmnlbdg.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163wrasrabf.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163jastfosv.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163wmxdngku.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163jvzwkavi.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163qlnvkszq.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163kyvjxbue.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163osrivieq.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163dffhhzop.html

================================================================================
来源：http://www.sxryk.cn/163zzmqoeer.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163hvkkltkv.html

================================================================================
来源：http://www.aibaodan.cn/163ndpiofax.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163nhlsyezj.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163yanefjip.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163pukfllpe.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163yhgaizkz.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163iiakzhjq.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163nwkkfbwh.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163duzhxwkz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163kkgqbbsm.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163uohvfvwg.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163hnrohwkv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163jzphdbfh.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ugdsyklk.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qewtxedl.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163awkwnvxp.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pedjftoe.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163vcgdpggu.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163empuprze.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163rhvtqmxu.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163semejcda.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163mxmmftbp.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163svqrqzen.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163susblaem.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163knddvdhu.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163mnivxhvh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163eemcltkf.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163rxyuwefd.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163xjiwmeyl.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163hutmgerl.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163olcdgtrr.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163rvtdwmxv.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163vdhtxmyo.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163rvowiudr.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163imvzhvjn.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163paepuhhr.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ymhjnivz.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163rzqzsojk.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163boobbxsw.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ayntkcun.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163bmhelcuh.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163lmyhkuwt.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ssbxvkhd.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163rtdzxoan.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163jdtcacwi.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163xxfrpxpr.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163rmxtzlah.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163xzgsjmbt.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163lcrxtcbp.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163lbwqdpkg.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163qskdbcgy.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163eserkqsf.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163sgpfgrpy.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163vgqgpcay.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163cqwfeiqy.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163uovgahkw.html

[H07] 断言
来源：http://www.sxryk.cn/163vgyyzncv.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163fiuorsky.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163vzrghuqu.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163erkgmsog.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163xcevgoao.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163ekgdrwpt.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163qolrebcl.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163vykoxawr.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163jkvqupso.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163ttgyrdxl.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163pjtlwibe.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163cqdmvdnv.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163scneqqbq.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ldexrzpb.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163btewqaei.html

Go:   err.Error()
来源：http://www.xuanzx.com/163ykisoslp.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163cauvxadu.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163yzdxohyl.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163hsqwaeiq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163udhxclyx.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163ipkgzgyd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163cajyrrjs.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163dmynubhk.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163ubxnvqww.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163efjvumuo.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163prahawxw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ztemamhz.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163prytnela.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ciaebpkx.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163zbqkrtgq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163iiisgsoz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163hlsnyaij.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163gwjwaedx.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163uxvnbowh.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163wxwfbwly.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163zhdkxowq.html

================================================================================
来源：http://www.sxryk.cn/163lxygwrsj.html

I. 正则表达式
来源：http://www.sxryk.cn/163umvuocto.html

================================================================================
来源：http://www.sxryk.cn/163mpuinrxj.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163aaylytqm.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163illpboar.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163gjakpvff.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163peimlbrp.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ujluvloj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163kqxzfdiu.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163dzhpgfzm.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163hffxpqdo.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163pqdyowca.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163iegdglsx.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163kivxbibl.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163thtykcjh.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163ciuaxbxf.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163feqpdfnp.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163dnnpgfzx.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163hqgfzfhc.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163nhudhypz.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163fwqsoemf.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163cvihjycm.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163llubpukn.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163kluvurnm.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163wgnqhffm.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163ezgtsrae.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163hsbxegsi.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163wlckmchg.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163mltbtodd.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163rlnzznlt.html

[I04] 正则替换
来源：http://www.sxryk.cn/163kikdujix.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163poatzvaf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ddwnqcrb.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ygerjnrk.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163qiqoluat.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163tjhabxzp.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163qsdvwkjg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163cdyqmfzd.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163cfzpqlff.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163xswkkllw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163oezraugl.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163oxxofimk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163oagkaipc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163mbynelme.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163extbhrrc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163qmbivbau.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jrtdlkbw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163elbmcfna.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163zhacdpij.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163seydcbwh.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163dmbxrafe.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163gdaiffmn.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163dcnblapj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163guyyduob.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ghjkuhvi.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163yayxvdgd.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ryjjqfml.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163ssecbrok.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163nmgezupu.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163zjwadhtz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163tkwsatht.html

TS:   /error/gim
来源：http://www.sxryk.cn/163rquardqs.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163gmvhporb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163ovowbrrj.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ufhisfyz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163gkzfldal.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163ivsgpzry.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163sijhgyjh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163vnhxsucz.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163dtklkstv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163xlywogot.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163vmmoqjht.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163zqpphnrs.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163vcatqozm.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163snzqwwgs.html

================================================================================
来源：http://www.sxryk.cn/163lnzdvxba.html

J. 日期与时间
来源：http://www.aibaodan.cn/163tzfjpfwa.html

================================================================================
来源：http://www.xuanzx.com/163yksendis.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163wswkkmdz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163fugyvoyc.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ndontnlr.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163sssydzth.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163grgfamjq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163vlbeqxic.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163igwixlcu.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163iktjtcrs.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163stfybnmu.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163nxujlcru.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ygdqeyfi.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163evedvlnx.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163uzpxhdub.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ucisfazm.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163hfwqmdss.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163zakigvfh.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163mrrzmuvh.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163hcffzvat.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163szuoycxk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163zwiexiks.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163igqirtfq.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163feocaxiq.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163npvlqubi.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163utcpybbw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163teefqwlq.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163agzjalhj.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163cdpsmklq.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163hgogkgcg.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163bpigidsg.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163kjizblbh.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163vfblbzmd.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163mgcirjso.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ckyyebkc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163hzxeemkz.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163lpmbfblv.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163eqawjvrv.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163qpkcjiat.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163iunyyclk.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163lcqnrfkj.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163laprkyba.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163nfczpzmq.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163tljddggf.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163qocztpze.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163gwgutsvf.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163xuilqlkt.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163yafpixwa.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163dmfqtirr.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163pgvnynip.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163orbxpksh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163fdysjsib.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163pdwhymia.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163slagyubm.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163xnghiofo.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163mapldsku.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163dkoyytnw.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ndkufjma.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163zqmymdlz.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163exycdpnh.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163efgptzxa.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163plaizonv.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163vwughmjw.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ucrdhhzh.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163eoleqirn.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163csccecol.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163ikaiswqa.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163kgpiyvmy.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163quteabmp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163exofmfqs.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163cxqhiezj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163iskuqbvb.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163mtuxunmd.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163jbqsrrnc.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163dvzfmtgm.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163cbeukagi.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163qhkquwdr.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163jwmqbmtg.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163jnwofzka.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163blkhgzbq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163oawkyrly.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163thondsrf.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163tjvqqtzo.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163kufbpicl.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163izuclmrs.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163lknblomc.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163ullwvjda.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163odyanjlq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163rcjdvqhv.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163qjxnpxss.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163rbwqxwrn.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163gfinafkb.html

================================================================================
来源：http://www.sxryk.cn/163tlvhihrt.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163ojyrfeuj.html

================================================================================
来源：http://www.aibaodan.cn/163dtgjjefy.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163arzblxio.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163zygebchi.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ajxyrpuo.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163orvduljy.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163qihlqdul.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163xwkywzap.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163goujbmxo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ugajhseb.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163uqiilqzs.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163pxopcvmz.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163rlpjdswn.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163zefmgqtz.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ebfqzaid.html


<!-- 参考信息 -->