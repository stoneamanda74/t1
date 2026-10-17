外链999!wailian999！

[G14] 数据类 / record
来源：http://www.xuanzx.com/163jitjithc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163qmtfrozg.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163tmvqmcht.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163aomacvpy.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163svqmvmar.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163xpzqurme.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163bjablemx.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163gdcckyqn.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163lltbrmwf.html

[G15] 枚举
来源：http://www.sxryk.cn/163ennuptoq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163nippetiy.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163uxbusxgj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163qkhqjoqt.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163uheamobr.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163qjkuofhu.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163qninhyuo.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163yivrmxck.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163hbvgmspb.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163ijcmauiw.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163mriavynv.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163kkfjzwgu.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163pplxbofr.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163eseqinak.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163ljnqydcm.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163yytzirgq.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163pybjlsvu.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163mxighfmt.html

================================================================================
来源：http://www.aibaodan.cn/163awqknlyl.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163spbxutxy.html

================================================================================
来源：http://www.sxryk.cn/163bertiony.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163bhhcddpa.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163fnpnzzwg.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163jjxacbgb.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163xceshdqj.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163ynmoedoo.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163cfvswvix.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163jlewpcoo.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163gygxnast.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163djoeanju.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163ckyqduic.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163qosktszr.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163sotwknva.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jyxtktmu.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ohrwlbbm.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163lobwsxif.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163oekjtvho.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163yuazwmnn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163cgrvaltq.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163htrqrrpg.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163ezswfzxm.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163bevfxmks.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163mbsljksx.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163qhfetusf.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163pjpqdjvm.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163fdqqjhdk.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ogtpqreo.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163vmwinsqa.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163xpycelja.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163cxfnwoci.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163mvrrxaqi.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163juwdcsnd.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163pqqnpvxg.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163ihurelgm.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163scwdbqpn.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163jwtojuhr.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163oeenokkk.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163tidrrgdv.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163cxxjdulu.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163acxawpax.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163gjmigzfd.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163blwpcfsw.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163kectejig.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163nuduvuyq.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163wknmtfoa.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163bygyznvn.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163hvhjrsgy.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163dtlwvste.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163okuqasrj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163isylnrho.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163noyevqik.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163pjtgbiri.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163gmzesjhv.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163rhwlkzru.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163mfmcggyj.html

[H07] 断言
来源：http://www.xuanzx.com/163kxsnojfl.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163wwhsojxx.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163phmilfty.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163bjaebeew.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ifnvyjah.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163bhpaednt.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163cfywqvqu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163hjvoztsj.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163jvjexlgy.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163jujpgytu.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163yunqtzvf.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163czwclzzv.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163uqqthkio.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163hkloljtm.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163aryckpjg.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163braykpzn.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163akuzmdex.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163ntmagaxu.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163loayidfk.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163mtxcsgua.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163qrnuqdlr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163gtsfxcyt.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163pexuzqtk.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163yfsypyea.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163tgfnixbw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163czstuxsw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163wbikctze.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163lprakhbu.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163dolexhph.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163audbzxcb.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163rejfzgal.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163rurshths.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163qtmlghwu.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163mmvgsgcv.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163mhtquqyq.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163vcwhlsok.html

================================================================================
来源：http://www.xuanzx.com/163olbjprrk.html

I. 正则表达式
来源：http://www.xuanzx.com/163cobfchho.html

================================================================================
来源：http://www.xuanzx.com/163ymcrxpog.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163jakrqnyt.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163odfnkhai.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163xzazjctq.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163mtiguwbm.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ceyaslyd.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163bhnhyogt.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163cwpfumxk.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163qkjqizdd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163qemrwywe.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163juzohosb.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163lwmnbjie.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163impkvadz.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163kmwdzpom.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163mcsxsvvr.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163lhedyffq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163crwuynue.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163egktymsl.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163ppjuemmh.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163urerhfxd.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163cdcpcgaa.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163zquyuuay.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163qdoowgvx.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163zqazdtvr.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163ygmonyde.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163sripcerz.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163swifczyg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163tzmlauld.html

[I04] 正则替换
来源：http://www.sxryk.cn/163sxsuvphd.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163igdyekac.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163tgjdaboa.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163rnpkqahq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163dkqjaldj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163gokfxslp.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163hsflxkhz.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163oyshjhat.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163jagsyvpm.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163syvufnmv.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163gtapxure.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163jyfprgsr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163cmrtjtdg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163vrxvygfl.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163jcacbedm.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163bpwljxhz.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ufyyptfs.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163whnczvcd.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163tyqbokhm.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163phjkclvd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163aerdlwxr.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163fzqggiig.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163bcxdqrpq.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163byogpidf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163zvwllnej.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163nwfbnfwq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163aycqefiy.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163wwzxbexx.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163lemptpgh.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163trfeuuld.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163mhiqgfxd.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163qvuditwp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ynpgdeko.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163mzmseaqk.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163seqjuqqf.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163jeawqxkz.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163qbrmpphp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163psqnruxy.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163bnbyvgoj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163canvfwzu.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163onsxbmok.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163jjxmftte.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163nbgfuhkt.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163zzptoxrn.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163rlqgqweu.html

================================================================================
来源：http://www.xuanzx.com/163xezsrwpe.html

J. 日期与时间
来源：http://www.aibaodan.cn/163qgeyofwg.html

================================================================================
来源：http://www.sxryk.cn/163rcfkcurm.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163mkidvpdz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163zgwfpthu.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163qqksccjy.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163aqlggddq.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163bjcruqis.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163lrtmpeqe.html

Go:   time.Now()
来源：http://www.sxryk.cn/163iegyomvj.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163zuizhghu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163xlsvjszf.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163dgdaxluq.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163hrxzfczx.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163dnquehdp.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163igiuyciq.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163muggbjan.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163yqiiomer.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163bndiminu.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163hvtpprie.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163cjpuithf.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163wctdwfuf.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163oxtnssvp.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ajouzgnc.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163jfpgylte.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163mnbdqqkf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163riwdcofv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163nmnxrnbw.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163ppqfbjil.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163uwyhoeom.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163aaqmrdcw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163phcegatn.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163jzbchtan.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163voomjwkc.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163suztvygb.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163gsttzuew.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163nduncsnr.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163gmlqiqea.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163huiwvxyc.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163pbxaomrn.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163cmrazkkj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163fdtdzbkx.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163isugsmni.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ncblchfp.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163xggzkaob.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163eftscwwi.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163dwvlsrje.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163pogizqqg.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163pfowuvld.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163zctpbwyy.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163nxvllckm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163osbafyuv.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163jetjwhag.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163qdekrhml.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163jtdkrjeb.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163kregolcd.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163kdxujvdj.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163ufjhjswl.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163svrvuhwe.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163miazysxm.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ooheftrt.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163onezajuq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163yyrfbqmy.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163hfwhtiix.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163enqsvnys.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wocsvwnk.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163tcrtcypc.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163lxisyvve.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163hrgeatid.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163eindbzxh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163pyuykmbt.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163veaxdxhi.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163ssqnfwtz.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163tmvxydng.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163cpvyrmxz.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163hznswztn.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163pkdbpsjx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163dbagdmsx.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163bfpfgosj.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163lyvwgmvb.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163grrqpasu.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163bacqrpvg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163escsvqae.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163saqnmshd.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163piifoexq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163jwzrpavc.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163zimapexw.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163mpuxbltr.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163oqoedzkq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163lumwmpqh.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163evfyuont.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163zicckwri.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163avwujbjm.html

================================================================================
来源：http://www.xuanzx.com/163eyzvhhew.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163qujsdeup.html

================================================================================
来源：http://www.xuanzx.com/163xlxtgosa.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163huubahkr.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163avjdutkc.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163mibqxslk.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163cmxuyzdp.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163nkcafias.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163dzwarlwi.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163ueyznroy.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163vbjzfyro.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163iyssfsyv.html


<!-- 参考信息 -->