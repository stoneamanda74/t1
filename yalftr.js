外链999!wailian999！

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163hjwjprnl.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163miaudccp.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163gscpljym.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163tipwzvsn.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163glurqpeh.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163cwxmdkch.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163bmnxnpjc.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163qxpiqoor.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163lylvgekd.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163zwklijwb.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163hwjbtoeh.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163udixufwg.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163lmosdxjo.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163lsygnjgn.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163gbfvsubt.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163gnwnsklv.html

[H07] 断言
来源：http://www.xuanzx.com/163drpbakzg.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163zkhrjeui.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163khsrgjym.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163sawqwgap.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163xecqjcbm.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163owrilinn.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163qnprmmeq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163duazbyjl.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163bqqmnzvk.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163lsvgoetd.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163qxppokpc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163utkbfuvn.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163skojrlbv.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163pdapjdve.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163ggnzzzli.html

Go:   err.Error()
来源：http://www.sxryk.cn/163ddbrpzel.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163gblefuld.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163jrympomc.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163reuuphri.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163xwwpnxdw.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163jbgqhqrg.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163pgaytdwq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163bzkltaei.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163xkbuwvzd.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163lskeekin.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163ijedhnwg.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163ulicfefj.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163vfmvhcyp.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163hvccnhro.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163jawpcumi.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163arvnivld.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163dinszebg.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163sznhfyjb.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163mhvuwfaz.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163rzzvxqly.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163vhgwnnbd.html

================================================================================
来源：http://www.sxryk.cn/163hoxdsevh.html

I. 正则表达式
来源：http://www.sxryk.cn/163rxhzxcuu.html

================================================================================
来源：http://www.xuanzx.com/163detoahcy.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163dugcaasu.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163yuzpikrs.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163simkbinz.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163csaigatl.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163qdkzuffa.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163ustupnev.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163zmlrhkfw.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163ddgrjoqg.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163bxuhcknc.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163lkbgvhca.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163lncaxzvs.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163ygctxchb.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163pqffotvm.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163cbfkkwrx.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163lvfhllfo.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163whhouckc.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163prnzbzrn.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163qmjmwylo.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163zjznyksd.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163dyevbvjb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163opvgqqsn.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163fjzyfplu.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163qihrcnug.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163mssfzkzd.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163tzowsqri.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163fgnthlen.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163rfroxlgd.html

[I04] 正则替换
来源：http://www.sxryk.cn/163ifubfocb.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163iknucyyg.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163lfyhihod.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163llqfoeen.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163jnjobkuy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163qypoutxy.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163hnsgtuyh.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163zzuzuqrt.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163gxscxyun.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163wiginawy.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163rdmmmtpa.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163sfadfict.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163uuzqoozt.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163geembvfe.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163beavwxqg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163kroxyovn.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hvqbuabg.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163smdgigid.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163qodsibzt.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163wszlskkr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163gppgptnx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163rpmntobc.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163oaqovdko.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163yrxxczbs.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163qmvsulwy.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163pktvlbkr.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163tgxoaglz.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163msdtsguq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163tembzflq.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ddvtuskh.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163glkxmwzi.html

TS:   /error/gim
来源：http://www.sxryk.cn/163bsghnvel.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163zsviljaj.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163ktzcinnt.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163dceaqmby.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163yupcuiqv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163crytbpmh.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163povylaxj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163cnefeyre.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163djiwnvrt.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ljhjkyge.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163dtsouyqs.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163otyxpyhh.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163ipbpqnld.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163mfxjbvrd.html

================================================================================
来源：http://www.aibaodan.cn/163aumwiyjy.html

J. 日期与时间
来源：http://www.sxryk.cn/163vcgrvgft.html

================================================================================
来源：http://www.sxryk.cn/163xvexrycc.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163lvfqvtye.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163ywidcgvx.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163cphwnpse.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163mwjdbdgq.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163yixrigxk.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163cpriwqma.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163ibzgokza.html

Ruby: Time.now
来源：http://www.xuanzx.com/163niqvjltv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163ohhbosgp.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163mgvyecjc.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ckvmxxpi.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163sigwhraj.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163fluzvcby.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163eemysplc.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163zqjwrxme.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163axvfpddo.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163wsxedakw.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ghebedqm.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163vcxathwc.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163mousyqnp.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163jjiuadlm.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163qjizyfoc.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163sobjaidw.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163rcomemns.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163eimokyux.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163tsssxzxv.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163fcicbyby.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163rlybactt.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163aziehqns.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163iuenlhsh.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163pxlcvxgh.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163entfqbzo.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163hvbdkfos.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163gjbxerju.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163tonyhkff.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163yrykpafh.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163poesdqye.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163xqovzmxh.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163rkkawmmt.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ekokoauv.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163akrwitkn.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163yudlkjnz.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163lggimwfr.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163twghthus.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163hmxpnfek.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163lcvhnfcy.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163zdxlkvfs.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163qfgpekea.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163dcjhucou.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163gtpdqezz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163adazjxud.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163kxfaribk.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163jxcpxwrl.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163ztkoywbt.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163yoyhxabt.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ltmcoefa.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163bwfszqxn.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163lvxkgkis.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163yulidqqa.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163zbazljec.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163whkmcvtu.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163eeovujhh.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163afozpmzx.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163wvodtvjn.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163jyzqvnvz.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163xlffdrjf.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163dmbhkheb.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163olwapxjy.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163xxhocfnp.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163muxtvons.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ufmkogja.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163wslhoccs.html

[J09] 时区处理
来源：http://www.xuanzx.com/163owreearh.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163jgdxwmur.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163oiwjiscc.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163jnqpfouv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163pfuahnsi.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163zyadvjuc.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163urwvotdr.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163sphhzfnb.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163mwsihopr.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163jibaxxko.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163beeejckg.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163tjhdljrc.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163pcjfsvnk.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163ltjmhdyg.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163kceyoluy.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163qvieaxxf.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163bdmpchio.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ojceorxc.html

================================================================================
来源：http://www.sxryk.cn/163niwqaztu.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163lchdohth.html

================================================================================
来源：http://www.sxryk.cn/163rkixiccm.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ndtygdww.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163hcbzjlwa.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163hoqhugpc.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163tpsewdns.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163gchdtjlm.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163azpktsve.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163ecujafxv.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163cuwvdjtn.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163qijcuhnk.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163cpcduhjl.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163jaigvomf.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163nkwbirqj.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163uovyhqgu.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163bdvfcnjz.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163klxoeewg.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163youuhdfp.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163ylxnowva.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163sncxnhmc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163oltaxtkd.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163oxhemrzd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163zyxiokzg.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163irkkqpxs.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163blcrxyar.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163ezoqcxru.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163wnccdmbx.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163xvzqkidt.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163vlajrxpu.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163lswyybaf.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163agntaabz.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163dhcyqnnt.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ffmxyzts.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163treeuwbr.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ngpscuhm.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163suqtkuft.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163vmmxrinj.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163kqaoujuh.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163tihtckfg.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163sorwjrub.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163fqymriaq.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163vnajotay.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163alihawyp.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163rjgkdfww.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163guuizusf.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163oygezhjc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163zcivozjh.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163vxjvpfob.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163qyirvsaw.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163dkoqhnop.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ciwzpknu.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ablyomfx.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163cntsmjph.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163bpakkxvc.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163gmuofgup.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163klsmngbd.html

[K07] 进制转换
来源：http://www.xuanzx.com/163uenxlwbb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163vlzlkauz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163tfgfxugi.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163nloqcdew.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163vuhtswdi.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fjlouhed.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163sbgvqavt.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ytgxhidh.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163yrzkpeiu.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163iezyjnpr.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163cnzkrzhr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163inxilwjt.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163kyhjxwxb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163acjjtmqx.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163whopcyva.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163zbxlbxuu.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163voaaqqvc.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163ffvzbhrr.html

================================================================================
来源：http://www.sxryk.cn/163emwgtqoc.html

L. 网络请求
来源：http://www.aibaodan.cn/163ykhniaum.html

================================================================================
来源：http://www.sxryk.cn/163ohnzkclw.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163wydfyprc.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163oppxilty.html


<!-- 参考信息 -->