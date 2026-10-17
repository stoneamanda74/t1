外链999!wailian999！

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163oiawkucl.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163dbzsfgfi.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163vkhajggy.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163hdcdured.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163nofeqvmt.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163qkjwbinz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163iplyuqdc.html

================================================================================
来源：http://www.xuanzx.com/163snhkfcmk.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163yrxcbpux.html

================================================================================
来源：http://www.sxryk.cn/163umdxnpkp.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163watunxho.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163srhillsx.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163xxrsdrcq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163vntphioe.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163lndvxgoo.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163bolkjbmn.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163nnxvezyv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163pweeajhy.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163vnvpvdtv.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163wtgyhyoo.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163gilgeawq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163uqmcqdha.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163dlahnvgi.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jpwnfcwk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163edajbtxq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163grvczmef.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163wwweiskq.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163yczhvzws.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163mpcmnzly.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163mtaoigka.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ajstynbz.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163qzwznzax.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163jrtkofcd.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qbgjdijh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163gfiiyltm.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163ammutrpt.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163qmgpaudj.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163onrdskqe.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163cghkdaah.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163biadarao.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163nxrfwerm.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163aaxyhluz.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163lpuewjjh.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163nukgowpj.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163bfothbif.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163oglimdmy.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163oztewnio.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163mqjyqvxn.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163qgmemvfi.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163gorlzjwg.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ewnjtjuj.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163suduwvfv.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163sudcszlb.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163rikrsfco.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163zaqwtdgg.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163wourfcbt.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163nccxfkeq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ewgshoce.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163kyrqdwwu.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163sqhbidze.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163kgvooprs.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163ghbhzhdx.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163wkbzerjt.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163oedapeqc.html

[H07] 断言
来源：http://www.xuanzx.com/163cphwxgup.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163dlegzmez.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163zkgfpwxw.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163wzflyfaj.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ibdzpjzj.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163komasrtd.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163hyvkjipa.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163jwiynvio.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163edlshjtu.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163yftdhwho.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163fwaoqthv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163gqudsxku.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163tnbulxjh.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163upolmwdo.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163upozslor.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163mbabnwjk.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163kvowdubc.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163bfjlhtfk.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163thutxfkw.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163xqbcvhco.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163ealvxqnp.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163dbhtzxmk.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163nxkvjbic.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163oxcoaglq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163bowrjvfm.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163pwpacxhp.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163ouvcvhtc.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163dpiivcfs.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163aqkhvkdn.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163wuugqxkf.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163quatbhjv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163qfqgnhun.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163nleijwtz.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163tkecepdz.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163verkdttn.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163bgmikagd.html

================================================================================
来源：http://www.xuanzx.com/163zclsfkqe.html

I. 正则表达式
来源：http://www.sxryk.cn/163hyvlybgr.html

================================================================================
来源：http://www.aibaodan.cn/163yzsuewgj.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163emctdhwa.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163rgldaztg.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163rbiqlyud.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163lvsdgquw.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163hhbucqjt.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163cmeopubl.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163vrxlovao.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163zhvpzsqz.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163rlasioep.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163kyanfygq.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163pbjsdgia.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163tbqgkkym.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163iojqejwq.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163jyinqloo.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163izjhfdht.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163lfehmtbs.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163wmghfonm.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163rqynxaci.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ifchftik.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163lqtjdfmr.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163nsuxpwjt.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163pqzfkuuq.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163zianxerm.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163uumnymtj.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163krdxiznj.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163exdwtzuj.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163kgcycesn.html

[I04] 正则替换
来源：http://www.sxryk.cn/163xzsbuseb.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163kmitkvtv.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ktbgdfwz.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163yzmoiufu.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163vbdukamh.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163vuvmiquw.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163eemalnde.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163iuwagiej.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163pmjsqtlt.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163egbmutpu.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163loxrbxnb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163hflootaq.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163qxcbuawy.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163tvgiauhu.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163ilquyzcm.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163qsnzcnxz.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163meiumpao.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163yukkuibn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163onkjnqju.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163svlufsyf.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163tpbtdwws.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163enxpnvza.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163vkreymus.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163zeskghxb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163hlmvbkje.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163oqnukbff.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163iqqczczv.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163bjhtogyn.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163dmrvxpkw.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163rqxlwecm.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163mkcicqyj.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163aasigftq.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163nbxouyjy.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163hczsyazd.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163armxfsjm.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163zzkyselz.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163mwqrvuex.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163yrrlozwe.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163iurmydwg.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163brcnyqbo.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163wjysusmw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163nrwylqqt.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163oqhebjpy.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163esfgympq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163raczkzfs.html

================================================================================
来源：http://www.sxryk.cn/163bpmrtaku.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ugjetjga.html

================================================================================
来源：http://www.xuanzx.com/163flfwymxv.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163xgjijjue.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163yisysppi.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163gejsjijq.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163crowjupj.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163jalispce.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163zwdijnxc.html

Go:   time.Now()
来源：http://www.sxryk.cn/163hpclgonu.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ikyekvlr.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163afbovafk.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163kstklgfg.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163goeoesvu.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163sckvpsyd.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163nphuftcd.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163oalhgrxv.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163wfvvtovi.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163tpxewoht.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163qygnagxh.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ddnusglg.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163lhjflvrz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163afqcepcd.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163miiyekcs.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163xoqcturb.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163qxgiwiio.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163sgzyxfht.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163rbswuvqz.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163ospjtsvm.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163jrffrbpm.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163eovgsjeg.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163rtxrjhjm.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163mmyaylel.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163dsqailvg.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163vppelser.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163sbujsghc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163yznggqpr.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163nbbxyevc.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163mqkdxmst.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163ipeincqf.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163ybqujqvn.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163gunxjtnn.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163wjjnoiuk.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163bondsual.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163hkgpoare.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163aqdkhtbg.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163faavhhzm.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163uozmxlmg.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163dsatrudl.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ligqmdpd.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163uonyyzqa.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163yqjcqxqw.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163blgirvdm.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163bffkbhvo.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163qgkztfif.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163zcdixscq.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163rhpfjoyi.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163axzwmdrq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163erkmyfzl.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163axljzajl.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163oxulqsxp.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163wlffonby.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163gcwkiicp.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ckyxbqia.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jiiocxis.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mytoudig.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163skaclcak.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163haftidcn.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ykuwpoiz.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163cfluefut.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163grzscgki.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163pejtdtuj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163gpqnjcjn.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163qurmrtnk.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163krpwsyib.html

[J09] 时区处理
来源：http://www.sxryk.cn/163fudkizxb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163wwunmtga.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163wbwpbqfm.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ceyrdkzg.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163dtoywezs.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163aumgunkw.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163alhaplqo.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163ushiweng.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163mtwcyaoy.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163hphirwwq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163hohmjpmh.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163catvkrkz.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163vjnatjec.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163frdffrds.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163xycssrit.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163cqdjpwgt.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163hdnrobrx.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163sumbknxm.html

================================================================================
来源：http://www.aibaodan.cn/163yqujcixh.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163bjdycsqk.html

================================================================================
来源：http://www.sxryk.cn/163kbqtocch.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163dkfibsqb.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163oyitbtbh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163uniizilx.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163feeggxxv.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163knulxpbs.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163ygiegevc.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163awsxgepl.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163mwxpasty.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163kvevejim.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163loybeaak.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163ghlunouf.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163cgkqxfgd.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ekwvmvls.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163yrnzhrlc.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163juhniicc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163eiisumnb.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163jvjkckqo.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163muheuqim.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163gebishha.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163zlpevazl.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163tspzpuov.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163xcnxfthb.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163fifkpnly.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163prwfjylf.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163mtomjbqj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163pblgtwpb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163pfsbyhog.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163gchtebgt.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163xyrczhxa.html


<!-- 参考信息 -->