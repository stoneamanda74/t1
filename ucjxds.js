外链999!wailian999！

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ntfjeeis.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163jjfkiofu.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163zznvldpt.html

================================================================================
来源：http://www.aibaodan.cn/163lguvydxw.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163meuejtgw.html

================================================================================
来源：http://www.sxryk.cn/163aljieqlw.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163hcvyufcy.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163uvualzwk.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163kiuphety.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163yqbrcmyj.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163tufogyfl.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163kowzidsr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163sfppokvz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163liiwqpdr.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163hqcwbfim.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163zahiqpaf.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163wwqhmtts.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163okjhxpbv.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qxcewrop.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mceejyvk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163oxmvhtwu.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163sqjxhmso.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163xcypilwg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163ucuygqxb.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163fdnbuteh.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163mbgbuelx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zglzzttm.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163oeuxoqvp.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163wcqpsgxm.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163riplmcek.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ozeusefr.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163gxeeyegu.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163lwjvrfwt.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163hmlnkqoy.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163fcxbgwjm.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163rkmrrtxi.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163eaghfttf.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163gsyzkcdb.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163ezkjckbl.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163zuueskip.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163tsaatzui.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163mvnponij.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163diyarsoe.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163xbxvrmyn.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ofvgvxpo.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163zofsgmnq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163lwprozpd.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163otuabval.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163astdalsc.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163tfjeasli.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163zwzwdzig.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163tdgpngmx.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163gwbtpsis.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163wmbrplfh.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163mucspass.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163hiyikjey.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163kfjsbbgv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163dfsdldwr.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163fbntbszf.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163pbswnhls.html

[H07] 断言
来源：http://www.xuanzx.com/163hwapwcks.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163xrdvcqvl.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163ovolzpfx.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163yitykatv.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163jeefivia.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163vdkfrgra.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163kaymdupr.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163qofgdokb.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163wrmalctm.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163lzywiiwy.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163rhbdmokp.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163barjtdkq.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163tjqrojym.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163seyutmmi.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163cnfeaaqw.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163afskzmtz.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163sgrdcbku.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163okbqywpp.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ygupyvkt.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163vsyqzuvh.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163tqzqwulm.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163lxeqyqhf.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163nlckevyf.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ghqkmkru.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163ioezzipc.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163jylfyzzu.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163nzcfmktj.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163keicopea.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163bstpcmrg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163chfxjhfw.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163auhfvbol.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163lrhbnkle.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163wwdrahkp.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163iludgebt.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163uiitanov.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163vjlocols.html

================================================================================
来源：http://www.aibaodan.cn/163yloyqiuu.html

I. 正则表达式
来源：http://www.sxryk.cn/163itdxgyyr.html

================================================================================
来源：http://www.xuanzx.com/163oopavvgv.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163mlktkzpy.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163trkxuxft.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163norurvfl.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163qcrkmevo.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163inzhkxts.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163yvjexcnn.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163cavqvoir.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163hvrwpjcw.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163ynofbzcd.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163phfnlbdg.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163mbwmrqtx.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163noxhamwb.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163jthnknqo.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163tmgyhmfh.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163unbjnucq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163ntgbrneg.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163zhlpvhzb.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163kxxnqldj.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163gzsocpoi.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163xrctffsc.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163jctxjqsg.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163oljxikfm.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163ynopmgzd.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163dxffyfcw.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163tbeigwac.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163toxtxbcc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163xrquwwsm.html

[I04] 正则替换
来源：http://www.xuanzx.com/163nctjillr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163vlngvxge.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163lpfvphql.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163raoyrhmz.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163sgzkichn.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163fivmdczv.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163pbapykjd.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163goplugfx.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163sbxdtmua.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163dxnxwzvx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163xrrgkcyk.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163lrdijwah.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163yrggtaxf.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jmgzzjly.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163ifshycnn.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163veuoqhey.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163xekzlxfz.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163bjaxjvph.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163orjanvot.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163izgerawr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163mqwpfdbq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163dnhjdvpb.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163iatviokf.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163cyjqkvxc.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163ssfiawfy.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163zihxyljm.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163focdogtl.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163qkdsjkbj.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163niyunzki.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163yyhxwkdd.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163kpskxljx.html

TS:   /error/gim
来源：http://www.xuanzx.com/163sxybdgam.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163kzqrfbrz.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163yqqaddqu.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163dnolteqo.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163wdmihpig.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163wzbttqcn.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163omspysdk.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163utbvftaj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ttoxyifl.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163xdyzhmgn.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163rgmiarxz.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163vytyqjvq.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163ikqxdvkt.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163kplhjtbj.html

================================================================================
来源：http://www.sxryk.cn/163fuzrfnqc.html

J. 日期与时间
来源：http://www.xuanzx.com/163foiheuzd.html

================================================================================
来源：http://www.aibaodan.cn/163sudwupnn.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163rjioyqjk.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163yudzygwt.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163lclxrash.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163pmcssvey.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163joekrefg.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163iziolnsv.html

Go:   time.Now()
来源：http://www.xuanzx.com/163kwutbwwa.html

Ruby: Time.now
来源：http://www.xuanzx.com/163zcbhzwwp.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163yfpgoamj.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163zxpexzpq.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163aluibeez.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163notpptnc.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163tdxuuywn.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163zxnvqfmz.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163ciytsgwq.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163jqjqtepj.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163yqhzosul.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163mdslytcp.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163hwzsiimd.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163dkczwhgt.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163tklfcukg.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163mekbvxhf.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163gwvhgwkw.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163btjejgby.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163slftvpik.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163avvbbggn.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163ybuovsvm.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163tabdvsca.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163nibjduol.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163fbnsvlnf.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163nkbentlm.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163wshokkaq.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163vngckega.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163bqtldmqn.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163aevjhggg.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163wckswluc.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163hosbigpw.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163egiuuwjj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163srvvxpyw.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163gdewndvj.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163wdtxpbym.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163knlcxqvt.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163vlazlhpq.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163sovszygx.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163qtdkjemo.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163dustflqx.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163bwjddtlu.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163kbtedpmn.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163gyelnyhu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163vtzdkwoo.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163xfpbkcvb.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163vwwlwkdi.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163azxgyxqw.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163kxvjnivj.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163jwvsykna.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vfbgphsw.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163iniwdnhw.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163yfkmdhqq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163gagttplu.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163njnpxywg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163elhexzno.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dhncgiku.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163lxtkoxlc.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163fdthxwim.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163phbdxnct.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163cjxzcstx.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163knrhpgpt.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ltrxsjzr.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163zdkpawmn.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163ujgwmcmj.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163bjuuqpct.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163dvtltopu.html

[J09] 时区处理
来源：http://www.xuanzx.com/163gdcbzcoy.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163okumksdt.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ayvzezxj.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163kmfbiaqo.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163nmpbolak.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163axtylgsm.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163qzrqzysv.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163zpkqztln.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163cbalqnfr.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163vrgzoyzp.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163bpxthyzh.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163eyahwzvk.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163lzknpqlt.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163efnkzmqa.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163edjblrjf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163qltmroyi.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163cqjoqmxb.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ehhnnkjc.html

================================================================================
来源：http://www.sxryk.cn/163wecavpup.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163waokmrrb.html

================================================================================
来源：http://www.aibaodan.cn/163zczghmqr.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ukdhsfla.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163tbchrhda.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163mugauvdy.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ujpdfxcd.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163etoujfpg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163xyhfzhex.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163ikxbguol.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163xnmyiurv.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163fvccpevb.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163giugaiim.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163bkparcqs.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ahikwdan.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163pnbcpzxc.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163oibgwvmw.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163lqsadfxo.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163knpbcbuu.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163skvpfdfy.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163jmivczum.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163rivhrcba.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163csrhjcam.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163etrmqnec.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163jnsyzcdr.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163iylxxghz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163drfatjoc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163odyfmmfy.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163tairbyaq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163mrutbwhg.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163yazleclx.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ggdwtyxr.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163mdfvnzyv.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163nhlpfxlq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163qbrtlsqa.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163rnzrynea.html


<!-- 参考信息 -->