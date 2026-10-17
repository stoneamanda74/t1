外链999!wailian999！

H. 异常与错误处理
来源：http://www.aibaodan.cn/163ddulhyao.html

================================================================================
来源：http://www.sxryk.cn/163mpiyuwns.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163zzhkebuz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163zcmbhvsw.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163zxncfpxt.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163blayhrmb.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163qzhkzpan.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163rdufrayh.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163kdjfkcas.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163skqnwsqu.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163hatqyqww.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163ivtzbrpz.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163ezuwjort.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163aibggkcr.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163htvyfvrg.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163sdrcptyj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163viucwqex.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163aevncygy.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163tnnszltc.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163behiybvj.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163eojdvqrl.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163qucltthh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163gaqgfuyt.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163iaocbcfp.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163pdxdkrje.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qgabnzup.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163yowrtxbs.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163slnnqysq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163ymzdiyti.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163rkqfanko.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163xnhfeuao.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ekuycmuf.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163wphzwyci.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163fmzrpuyj.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163nrqvnkfh.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163azflbkuj.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163wiulpgcj.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ufpbatxd.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163rhwrxboj.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ydurfiqb.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163fjfcacqb.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ogqjltme.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163dgbekfru.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163hnospwny.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163uyoilspu.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163wspnntac.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163biaufkte.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163gxighwfd.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163rjksoyly.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163vlhyjidu.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163aqusmqeu.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163suqkpjmq.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163pnlwrgdl.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163tdqcubnp.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163ovnirjck.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163tzddzdfx.html

[H07] 断言
来源：http://www.aibaodan.cn/163sguxlzyf.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163jbiwwiyz.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163qqjgyirv.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163iamowkux.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163hvyuxami.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163dfwbogsm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163esoebmdh.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163qeieuzva.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163xcwluvxm.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163txkoxyyf.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163jowwxbwf.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163oashkooh.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163jouixbgm.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163gxlnfkkd.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163ufembwrw.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ghempssw.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163anyloxtu.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163utrtzvyz.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163pbsrrcvw.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163rozycfcy.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163pootmbxl.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163ohtgokbh.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163cevpamuy.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163swvgbmxq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163kkgxawmx.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163uuzmjgcp.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163posrlloz.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163axgevfpo.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163vzvwvkfm.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163yxhlhwch.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163vcqxxxcq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163wjktqobw.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163bjhbhrfn.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163wkgdwnjn.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163bzpvechx.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163pzfzvmvm.html

================================================================================
来源：http://www.xuanzx.com/163llpauqst.html

I. 正则表达式
来源：http://www.xuanzx.com/163dmqanyom.html

================================================================================
来源：http://www.aibaodan.cn/163ujinfsjc.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163klxwyqpa.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163pwsvqxtf.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163orchgmuf.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163pvhjwhvo.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ftysbitw.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163kyignfyz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163dtclnitd.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163pxmtggiw.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163hxtgdqcv.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ajeuqgyp.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163swtkbyjn.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163shqxkekm.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163zigysnrg.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163gwrzxlgi.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163zoaozfgc.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163klaznuhw.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ihlrtzux.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163wrkfyyxg.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163bgkrpluy.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163lnbwqysl.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163giuirhkc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163bgpoxaju.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163ajmmlelc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163qgvohnrg.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163rifonceu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163fbwyqsda.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163rdpvfhlv.html

[I04] 正则替换
来源：http://www.sxryk.cn/163lkbytqle.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163cxlxneyo.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163efogkmvy.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163frdfljni.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163uztfhcbd.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163ccaeoovr.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163oyvutmet.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163kucbjfww.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163aojnaqpa.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163bqhtwwsi.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163lmuyekph.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163yrjkzaui.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163rcweqzse.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163cfgvonmx.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163qzzmwrzm.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163xzgdjtkk.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163mdoiybxu.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163wqutgitm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163shqcghxt.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163edodhjqb.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163kadqiztp.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163gzgmyifg.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163hvhjfmab.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163dpkvqdwa.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163wxtwvabj.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163siooaxok.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163pqlhpdbj.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163ghnhrgch.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163vqfpgzjd.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163wvzelyqr.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ockzkssr.html

TS:   /error/gim
来源：http://www.sxryk.cn/163bwpxdaml.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163yshfodoy.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163xgytatil.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163gvrosiyn.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163pxmzbhwq.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163ukxkpopx.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163qnamdpgk.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163xhhocalt.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163zmomlszu.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163buvmletj.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163jcyziftq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163nxwthbnu.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163dzgegmdg.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163jnurexif.html

================================================================================
来源：http://www.aibaodan.cn/163torubnqw.html

J. 日期与时间
来源：http://www.sxryk.cn/163rvmzbyad.html

================================================================================
来源：http://www.sxryk.cn/163cglzdmmn.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163msglpozx.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163ngmuxfnv.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ewcwctlg.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163nbbynxzx.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163pvnydwwx.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163isrdrzda.html

Go:   time.Now()
来源：http://www.xuanzx.com/163cwdqtlbk.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163gsgeisga.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163nopbfpxs.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163yqtulhxb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163iqldpmfz.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ytfucaok.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163njmowtjh.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163wxlgbskd.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163dtnusmpg.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163kwflzbrd.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163uavmluys.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163tgekfxqy.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163tbqovkfo.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163loqmlhuz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163vjkaozxi.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163yjkqcwal.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ggzetdcj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163qfencifk.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163kpsmfyro.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163aldiacig.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163uftpzxev.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163fctmxazl.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163jkumouyr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163lsemdpov.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163zeghujwj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163qjeozoyw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163xmstphqk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163pbtadqot.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163psswvozw.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ysrwmgzc.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163aozitylo.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163itsjmdwp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163hgwleiwa.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163dzzqxyjt.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163imuqcguk.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163sbakzvdn.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163uaesfxzc.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163mgoylnck.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163mghjldid.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163tqlenguk.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163mjnfqbal.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163nzmqyrqq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163btqekhrl.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163prbkwqml.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163desmwdqk.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163liizgdoc.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163brwlwfqr.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163caiihrpi.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163irqtgjei.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163lgbcuucx.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163cxalckyl.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163jawasmwc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163kqkmclvz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163ngdxjjcd.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163gaqzflql.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ndoxtkxf.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mzbfynbr.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163vriblpdm.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163piknkkar.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163bpdsjyoe.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163vvogxiqi.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163akmozrqn.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163wofqiwwi.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163vctkyisi.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163paxjbmpn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163zirxajnz.html

[J09] 时区处理
来源：http://www.sxryk.cn/163ndmepymi.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163ltngjgzh.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ytzjceds.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163qkvfdshm.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163tkorjref.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163kybbtebd.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163mjaigniw.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163kuakstxf.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163xgiimpbd.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163guycjyld.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163jwtypuqq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163krhbcndj.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163wohqhabe.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163ykjuxbtw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163tyuybwdt.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163luobmyas.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163mbnfguhr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163eyykonxi.html

================================================================================
来源：http://www.aibaodan.cn/163lnijfodp.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163ifiuiyqi.html

================================================================================
来源：http://www.aibaodan.cn/163awxhoixx.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163yrrayrjs.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163nxhwbxjs.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163zfkvlzvh.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163jqmdhmzx.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163spxmqlxd.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163nhyvfliy.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163fgaywzts.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ccwiwcir.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163wdzjvpwk.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ogroltad.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163dqfbtaui.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163tkhtrlri.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163vwgelypo.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163kfuxxpce.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163gxykenrl.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ppeahhqn.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163niezeztb.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163nujrjbnb.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163mmkjjvko.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163awjzmikb.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ccuzrllp.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163cutcibyz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163qerjhvmd.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163mhiyhimi.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163isjnzfle.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163fktzphnb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163dexjzmnj.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163tnpqfwur.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163dcjrkcpg.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163hihgrfrm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163pehslszo.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163qtfldijn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163nywqepcg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163vrhjafic.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163tuwneosd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163edhwsnmu.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163dvduphug.html


<!-- 参考信息 -->