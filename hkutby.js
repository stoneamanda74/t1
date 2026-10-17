外链999!wailian999！

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163afmxhkpj.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ejdofxoo.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163kyrahslp.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163pjzklutf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163wqfpvjah.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163ycjmkaqz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163rrdfmyyv.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163tlekzscc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ukheolhh.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163brpcbsit.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dqfrdsth.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163oxywgchu.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163shbtbjaq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163ilzgszch.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163lvsvhdud.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163ufcuupau.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163zctaofpr.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163dwjubdzc.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163fqlhyomq.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ejewgwpp.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163cvlyeaql.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163qjavgmpc.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163jyrgyevx.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163kumfaijf.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163mqbbiqcy.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163lhqgxsau.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ixcbxbvz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163rfdjgsmz.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163pveqszai.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ysgqwork.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163yiuahubh.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163wxlghjub.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163oapxbnsn.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163fvfcrhur.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163zuvqkast.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163ysehxzrm.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163jknnyivq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ixtjkdas.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163zwkjhiov.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163tfrtrnek.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163uqvknwyd.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163qciimyeh.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163cpcelhij.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163kffyyrlh.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163gmxocwfa.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163aoyxvfyd.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163gcdhipan.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163listadgl.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163tpubxfgw.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163dpynyemq.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163kunaeeae.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163veqkiqun.html

[H07] 断言
来源：http://www.aibaodan.cn/163yxldolpj.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163ybbqbrtm.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163cfnragst.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163newncylu.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163crmiuiaz.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163ogkyqxoy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163bqllbpki.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163adoqcntc.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163zncehebi.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163wdmdtblm.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163wxfykqwn.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163ekexsrml.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163sookzkdy.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ftsalzyf.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163zbaoxrmx.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163jxshamqt.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163iaojovad.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163fpbtgyeh.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163rcydgale.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163yqthupza.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163cohjguzo.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163vbcappfb.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163faopmurw.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163wcakgmjr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163xffnkcot.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163eeadiutn.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163evmqnaru.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163dngolihc.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163sgpaejbq.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163wlwnoqjw.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163nndmbxrh.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163wcqwzxmp.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163neuhcyng.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163hpkevgix.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163yxdjvhvo.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163cmlvbvfu.html

================================================================================
来源：http://www.xuanzx.com/163tqwrpfzl.html

I. 正则表达式
来源：http://www.sxryk.cn/163elljkvns.html

================================================================================
来源：http://www.xuanzx.com/163pazuyluf.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163qhpsvtir.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163jzcdkuzr.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163wvczrdis.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163hzpsrsqx.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163oopkmtvz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163ezcgxhgo.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163lafbconz.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163zvjuqvlt.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163miurnyjd.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163vjdfjicn.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163ribxdads.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163qksmmcfw.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163yjprmjux.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163bbojygwp.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163miyltucn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163fzsxgupw.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163iwbyrosh.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163sufiehez.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163cilfwlpe.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163gkdnnmeh.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163xqbtxzbt.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163xbmusxfd.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163zmrmgmpw.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163asybmffz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163ejneqyjh.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163otiqqqkm.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163soxqtbky.html

[I04] 正则替换
来源：http://www.sxryk.cn/163ejjyqgad.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ilbewrez.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ekwbccvv.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163gszzsvvy.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163zetptwxm.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163pzgfwvgm.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163yplhcdex.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163sxrprchc.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163ahaoatjj.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163udbhrqbf.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163mfgpkhyd.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163sooeftoz.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163sqvbetao.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163boadbsbg.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163vozxjtlv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163cqpmxkhv.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163dkzggqok.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163jsfaymtx.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163wdxgmcrs.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163pgiovddl.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163scgagwee.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163trvhnbmm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163slvixhza.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163eirgwxir.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163iiayzhyq.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163rygxults.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163icsxaizl.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163hndlttfr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ybzsubnt.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163cfnxgivj.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163cmquqczh.html

TS:   /error/gim
来源：http://www.sxryk.cn/163undzlnqc.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163qnpavtmj.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163askstwvr.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163uhdqxagt.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163eispiidm.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163ravvcovu.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163dvdfjexx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163xrjxxeco.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163wiacjlhs.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ejttsxjw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163sgzwabwh.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163cdqtcins.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163tkwsiboy.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163whvlijfv.html

================================================================================
来源：http://www.xuanzx.com/163oygdpnnb.html

J. 日期与时间
来源：http://www.xuanzx.com/163nknpgghf.html

================================================================================
来源：http://www.sxryk.cn/163pfdwcbaj.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163flbnilgg.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163jippeucy.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ugkyhcxj.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163rrghmpwl.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163zhmmslyo.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163mqdadabx.html

Go:   time.Now()
来源：http://www.xuanzx.com/163opcwjycx.html

Ruby: Time.now
来源：http://www.sxryk.cn/163dgjxvgrm.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163vntmvdjk.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163anvhhubd.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163yfsfytwz.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163onizfrgm.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ivscbiaj.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163otjogwfp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163jvandilt.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163skarvzsh.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163fyqhbxzs.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163qzrcdlmj.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163ixuywqtz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163kopujypx.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ixoghcqt.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163jxptdohy.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163gnxljaif.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163nghtioyq.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163gdocxhvk.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163ytxzajav.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163dsxsijzf.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163cnwqcnoh.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163bliehoje.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163audorqjs.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163zhmmjwae.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163fabkyxgn.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163eemdxvre.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163sycfprfd.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163soyajgim.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163zdugjvkx.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163argjdlhm.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163lxufqnfc.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163ahiylzuh.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163fsrqksvd.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163phclhetr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163johedvln.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163lbutvsur.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163aretbmcq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163yzwddecv.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163prtfrpjw.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163friwvkfp.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163qbecjfbe.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163hxpayrbd.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163nfwgibit.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163pvwwjbue.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163jwsccday.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163maenuvgy.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163kksakyax.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163plvrhqff.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163oyqaqehi.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ytzcjcum.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163lscnkucg.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163bcpecrab.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163jrxsnnyu.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163wcfmbzlf.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wymxwblo.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163sittladk.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163myfnqyaz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163dfjyymng.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163yldxrvou.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163qbgbqxvd.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163lwiajirr.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163iohdmfug.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163rncizvjk.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163dmugefcp.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ncecpkpj.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ekypmetl.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163vxilqttd.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163guminpnh.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163pcvvrwcq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163tanarnlk.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163seryxkiu.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163xmytolqy.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163xowxwhxi.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163tsnfvcvv.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163tnoyhdlb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163xqizojie.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163ngqdvwen.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163mjzacsrq.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163kyqecawx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163lylchydd.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163vauubhfl.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163fygnmkcy.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163hpepaikq.html

================================================================================
来源：http://www.aibaodan.cn/163vsrfaoiz.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163nnqtwsnb.html

================================================================================
来源：http://www.aibaodan.cn/163vmsvgnab.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163bfeswmca.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163unwznfpf.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163vvvnrqfe.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163faogkydv.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163hckvizcg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163leeniidh.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163ugjrmrpx.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163tiphfzer.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163rdfuarrv.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163brolvhkj.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163mqbyuzni.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163pckkosfp.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163agndvpbp.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163csezjygf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163oijxukze.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163eeniqkcy.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163sbburcvc.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163thrhgkbb.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163tlwmbbxb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163pfbwixzc.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ygouknnx.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ucmhmzgv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ltunasln.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163zcsxgqre.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163msimsrjf.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163dtenoxna.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163vohndkcy.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163jzycivmp.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163xnbufvad.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163lwrtpypr.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163qiwcjuop.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163amboqdjo.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163wxgadjvy.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163rqbemtst.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163znppxfcj.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163byagfiub.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163ntsvglyv.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163zhllsffu.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163eyyxsjwh.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163dgiqwwzt.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163suinejpf.html


<!-- 参考信息 -->