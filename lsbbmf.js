外链999!wailian999！

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163tdepuxeb.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163oxactofh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163akqcrugn.html

================================================================================
来源：http://www.sxryk.cn/163tcpibqfq.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163vrlsxmee.html

================================================================================
来源：http://www.aibaodan.cn/163ksycrmsh.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163vcepmevx.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163cnbbxisj.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163wwnzuiqo.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ouupjkhd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163digpevha.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163rhinnegb.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163yshegzjr.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163jojdupth.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163rxkddiwf.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163thivcyiu.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163wznexnno.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163prvnepll.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fwqsuwkb.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163svkcnetq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163oeuenpzb.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ltslvmze.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163fzrzivqe.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163rwhyfpzt.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163rgvvrsrq.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163zzufkcer.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163obtfqhte.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163lhrsxmjj.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163hjhilbyp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163tssiqanj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163spfxkzfi.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163nepoluth.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163bsvwihty.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163tjhclrad.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163dhpkfpgz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163fvmufvlq.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163phynqlbd.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163yvonmkgg.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163pjmsbuug.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163ivqzsezh.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163hynrkweq.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163vjdplkqi.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163nkmgswpl.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163qitxugiu.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163pqxrmfxl.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163cwpsecdo.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ppfwibjw.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ixxlirdx.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163lhnasqwd.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163sajmidnv.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163otwojdwq.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163tjgwcryn.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163cpksusbk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163sogivixj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163bzfmysmr.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163zpefqddk.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163cbyvzyyr.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163igkehfjp.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163lrgilbyf.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163ywdzdzbi.html

[H07] 断言
来源：http://www.aibaodan.cn/163nqnrisjw.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163btiaclmz.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163tyctdvsq.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163dggznafd.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163gvrzrnyp.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163fbvtheki.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163gardnbro.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163stgzmplp.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163gwmpiijo.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163ebqbtvsz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163gojopoyf.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163fhomoxpw.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163yjyvwlqn.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163hzxgksvo.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163dhlsireo.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163cxthjnyx.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ujmuyfgg.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163bkribvyy.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163obdlzeqp.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163ztmldkma.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163nkajzewc.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163qiqfxbjt.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163llyfmgeh.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163ivsccddb.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163mjbabxjw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163czikgpyr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163ikwiedbg.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163kmwiajep.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163hdcmnqol.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163feuqjree.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163nyklsdhf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163bxmlygkx.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163xmeyjgpz.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163smruhaku.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ycdliejq.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163fjqmabyn.html

================================================================================
来源：http://www.sxryk.cn/163ljdhxfos.html

I. 正则表达式
来源：http://www.aibaodan.cn/163bebdjeic.html

================================================================================
来源：http://www.aibaodan.cn/163srvumzhp.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163wvnarvgo.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163uiyuhzpy.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163dlxqjomg.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163lujzfedf.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163rbavycwn.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163hoytnmig.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163kuheoyjm.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163sduantxc.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163spazwdxo.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163wuywnsfs.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163ejajrvxn.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163zlimaoyj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163slzfyfpj.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163rklplmer.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163rqdoqled.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163rftbwsoq.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163wsbjkvaw.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163rsvpvvir.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163lvwxgtlq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163pegsxmtp.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163kfbymsjc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163wwgnzxix.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163hymwhjwt.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163kcrfjvqo.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163hmbwvsoy.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163cgjmnjiq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163ibajvceb.html

[I04] 正则替换
来源：http://www.sxryk.cn/163spiivdmm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163varczkvb.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163plnmeweb.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163wxvgjzij.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163rlapfnnx.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163zvjfdivc.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163fvxgbvrj.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163upvqxdip.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163vvocpmqa.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163cilsnnep.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163lkyjioht.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ktgzvrbt.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163cokrkoia.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163cjxbenjz.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163owgwtede.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163hdmuilby.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163kbxuwqzc.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163njulktwu.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163hplnsivn.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163zymjxotp.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163cfzdlsvs.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163dqpvoozw.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163rwghdyha.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163xothlvxs.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163ualaizhx.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163ejmvezky.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163vajmbzwt.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163prmuqjds.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163flpxcjic.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163ecfwemsg.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163gbivybsy.html

TS:   /error/gim
来源：http://www.sxryk.cn/163safijqfx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163bjfewtau.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163kcyxfeyw.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163nynveebz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163zzhyvyvk.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163fenhissr.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163cwjayotb.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163bnktilnw.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163qlwpmddj.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163uowtivnd.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163pnglpikm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163kcmektty.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163qsunfbnu.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163cvzamjrp.html

================================================================================
来源：http://www.sxryk.cn/163vqxtnamv.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ddvwwwer.html

================================================================================
来源：http://www.sxryk.cn/163oogaevgh.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163fwunhzcf.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163yfvdluwl.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163nafswokj.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163nbxpaosl.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ihlfmynz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163rvvszosh.html

Go:   time.Now()
来源：http://www.xuanzx.com/163fgyeozjg.html

Ruby: Time.now
来源：http://www.xuanzx.com/163unazqwuy.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163wfypgage.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163ttljylom.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163jkrehrez.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163skcynoev.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163opdzghip.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163kiustdpl.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163bigmpxyx.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163gpfniewo.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163hwjixwxt.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163iubohatq.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163dadvhexd.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163goahtzur.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163afiqhgyr.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ziilwspd.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163azjmeyvj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163ladafuky.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163mtpzbuue.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163wacybpau.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163seoawmcy.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163xuwkzlfm.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163utukobpp.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163wxnnrvyv.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163xzaxiryo.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163aqwpixkz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163kdnkppnl.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163vsqextxe.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163potpxjkf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163auzqjtnz.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163mytauvar.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163knwfsfac.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163hjxfltuf.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163wofetrbs.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163gnqsdmxe.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163mmzdurzf.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163ymmecxah.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163rbppoimk.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163vkanpdnc.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163asjcglsy.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163swnprbyy.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163moiyfqet.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163dytxayqn.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163cuycxaop.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163nqzvlmme.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163jnddgvne.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163nxxuqnau.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163abaxecwg.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163vrwpmwau.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163dryptfnl.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163jpgnofct.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163gcigdjuh.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163hhtkwldb.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163yzxgwgll.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ifzguhwj.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163uppoztne.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mfatulhq.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163usbmebnb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163zbicbkro.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163xoepkvjm.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163eghrsjux.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163txolrxwv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163rdnandkt.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163ecparlvo.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163lfekpfks.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163ktiycilm.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163dyryvufp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163horarhie.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163sfxuyvpv.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163xvhbpfio.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163btoxfuyy.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163ixfylhkn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ldylzqkm.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163wulocqpp.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163lykxpjgn.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163bkvnlumz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163jqnjowgy.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163brsltyxn.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163zaheqzzq.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163qriltkjk.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163jnkbrqjg.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163xtovrkqm.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163pxtvfbyl.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163zcecqsuw.html

================================================================================
来源：http://www.xuanzx.com/163krxjbdze.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163worbhvjp.html

================================================================================
来源：http://www.aibaodan.cn/163xaxtsavq.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163yruwihkl.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163urhvgwju.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163zdbpowqp.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163gszfklxk.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163brarnpmv.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163eqnmqaod.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163epuqmzyi.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163cfcrgscj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163sghklqqr.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163slrxeuny.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163pjwmniww.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163oivxkfvn.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163rkrvelnz.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163vrrwxexr.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163lgaxyxdy.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163fzehhmff.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163xogdozuh.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163eyxnukyi.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163dxuapfgz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163cfwbdhhx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ynqtphhe.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163caajznww.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163qvbvxvdg.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163jahwafcs.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163hoadjhha.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163ncepqtgg.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163piswotza.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163hwgamjcr.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163qwtteeox.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163idtqjgbj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163xjvddbvc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163bjypnzos.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ugxzvnmg.html


<!-- 参考信息 -->