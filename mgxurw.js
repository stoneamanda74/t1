外链999!wailian999！

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163xlbskqrz.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ffrqzmqn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163wajbvhrg.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163abxadcap.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163vbvkgaql.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163chhbywbx.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163pavprkfw.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163wyqndzeo.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163brbkkzny.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163bgvsxyat.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163ynvrlhvv.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163hnahimsn.html

[H07] 断言
来源：http://www.aibaodan.cn/163rbrxflnu.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163rewcpwxj.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163btcwpfuf.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163zgppvmya.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163jcwghkyy.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163jdgcknbg.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163nmngncrt.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163gygcbgws.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163brapjjxw.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163jvwbwlye.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163vejvqqjk.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163qlpubzvz.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163cyyoparj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163wuvnkvbo.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163ofncknaf.html

Go:   err.Error()
来源：http://www.sxryk.cn/163rvjguamf.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163bypnpkbz.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163cskkzjtj.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163hvvvylei.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163qtlvwowz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163qeqffquk.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163blgmpvjl.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163fcarcnmc.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163piddrnry.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163orlmdzvb.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163aiqjtvvx.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ugrwaqay.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163tmpoclhh.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163ttzfxlzb.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163afmlamjt.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163nwxsolvh.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163wnqshhxc.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163mavgoegs.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163wzdttltv.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163njiucpgk.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163cgdpwscv.html

================================================================================
来源：http://www.xuanzx.com/163gzcmqkqs.html

I. 正则表达式
来源：http://www.sxryk.cn/163llrlcskc.html

================================================================================
来源：http://www.xuanzx.com/163gfmizywp.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163fbqkurjj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163qteegdwu.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ayodtfux.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163cvamhsvd.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163vrcgnfsw.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163usofhayw.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163jbdipbhv.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163nnlhtpry.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163kmtizsfo.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163kaznxzgg.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163jsrslnyc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163wsilikvg.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163deswxwom.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163xanhyogu.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163kzkrpkih.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163cbsgsgdu.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163bebumgsh.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163ortjcwor.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163swufgkaj.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163bkyqesoj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163akeqqnmf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163kiczkmqc.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163lyzzpilb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163dgvjsvda.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163teeoysau.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163wynqkmrk.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163ngqxqpee.html

[I04] 正则替换
来源：http://www.sxryk.cn/163zvesebwn.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163mjycxtux.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163hvjsrqls.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163bkxpbccy.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163vgeztuyc.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163ifylbmpf.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163rocwcclg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163asfeguxz.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163ocsfhndf.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163pjnkfjfg.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163mfufhess.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163iwihyjhu.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163egahtbqk.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163leyffjjx.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163qnjdjmpi.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163nkyorelb.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xvatkmtd.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163oyenwsiq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163kxhhuxwa.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ymaxfscp.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163molkwukn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163unoqftzh.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163euqnaths.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163tggqrcyf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163jlgnlvtt.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163pwjvwsnr.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163zytwhyly.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163uzxtrind.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163foffzgye.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163xjokgwih.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163udxeanfn.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163zzogsqkc.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163nufxiimj.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163hmtsjiae.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163xthdfvzq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163znqzwjaf.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163yhdaxdcf.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163rynkgqaa.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163xciiphlu.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163mrimxlyd.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163vcomokea.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163dprqtris.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163ckbyvton.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163bjukmyix.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163xyyusfzn.html

================================================================================
来源：http://www.aibaodan.cn/163vgnlfpyt.html

J. 日期与时间
来源：http://www.aibaodan.cn/163vadirhor.html

================================================================================
来源：http://www.xuanzx.com/163tpoowawx.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163hotlpohj.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163crvhxahk.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163qtrfzkjz.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ojcwryac.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163peilwdwr.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163ehyboyck.html

Go:   time.Now()
来源：http://www.xuanzx.com/163kutnunqn.html

Ruby: Time.now
来源：http://www.sxryk.cn/163vuplghvb.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163fhkcpbit.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163tdsvbexs.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163xnktodfk.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163hgntstnm.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163ujjbtvno.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163qobktpif.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ycooutkc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163sojmlehe.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163hhzclwrt.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163gtpbjhqv.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163qapeweab.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163zmcphaps.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163gxmnucsf.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ahvgycjp.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163zkxjjzlm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163crkkxyjo.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163fatudvsy.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163qvrlcwfx.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163uvryzdbs.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163rbpqyrgm.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163xdjafprd.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ktrmkugn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163pqurghqs.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163ihxtqplw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163wbikqmia.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163ngkwjfen.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163euesxexk.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163wrnkkpik.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163mkhqgnee.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163mmuujvoh.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163giqqhwuw.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163iddfhnar.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163qqrvlptj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163aoqxsrhn.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163zgsfzqha.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163dqsjugrc.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163gynggtkw.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163dbscczur.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163kygllsrb.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163qkviarfo.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163xihftaml.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ehnxwesm.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163nvumwtpe.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163uldejsnx.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163yidfdkdb.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163bwurbpgu.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163ljubbghc.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163wzaurlrl.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163sqtafizj.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163jjopqcgz.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163hwjjwafv.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163woeikqwe.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163lzbzwtkf.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163snoedtqd.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163qhlkjbxs.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163tibbgbli.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163oveiqesu.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163gjvpgyol.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163twexyqhn.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163dizvdebw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163oiqnftvh.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163xrvkqtax.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163hslxvebm.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163jddhejfn.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163gtfxtvlr.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163fvwehyjs.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163xuovfkzi.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163zssrpfjn.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163pacstshb.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163kvvvgvuu.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163recnshnf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163gbudwjqz.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163icajwfnn.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163ziwcfcou.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163kpllowmn.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163iekizdiu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163sjtzlixa.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163juwkobfl.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163ynqbwmni.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163qowaomfd.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163smdicthz.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163fiiynbwe.html

================================================================================
来源：http://www.xuanzx.com/163aewqaute.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163bsxdybxx.html

================================================================================
来源：http://www.sxryk.cn/163ikhcpjsv.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163goatcyms.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163cnltqicc.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ihragxug.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163qzzsfiny.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163olhwojip.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163xjvqobrp.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163niglapbk.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163omkovmyc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163oadttirw.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163epdoscwk.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163kaiqfigu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163fzxferxh.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163qrvpynzu.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163gzbbairf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163gfelcfjo.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163qvkiuisl.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163grcgdxzb.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163djhuwiph.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163otdfwkqa.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163mjemexnk.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163jivtccsz.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163iyvglazb.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163qrmpqbte.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163wgpgrttz.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163xcwrmvfj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163gdiezpth.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163phbgvkgo.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163twruoilc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163jpcnougw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163urdmgtld.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163fetssdou.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163mqopjdsd.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163ojlugvzv.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163amdkvnbd.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163yupafcbu.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163nuglmcjl.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163dlpokzdd.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163fahwxlqm.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163nifflsmh.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163wdldtdjz.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163snpoiort.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163wgatyvla.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163mgoqnouk.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163xivvemru.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163myhqkjvf.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163rjfskhnj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163fniwfjmu.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163hsmrfuuq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163kkayemkn.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163xzfxvkam.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163wcdzthof.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163tskukzei.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163gofytonr.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163igmaabro.html

[K07] 进制转换
来源：http://www.xuanzx.com/163qehabfug.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163odzsbwkl.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163qvncbbtl.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163hluzqxbs.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163rgggxsal.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jnyhfcih.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163fyrvfyap.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163ydqtuvqr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163syxfsauq.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163wprgvwaj.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163sljldzwc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163umngszfr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163bxfgbfmw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163smyqqjdm.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163olcwyedr.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ugvtxixe.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163psvldhlc.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163xekblgqb.html

================================================================================
来源：http://www.sxryk.cn/163jgdyhxav.html

L. 网络请求
来源：http://www.xuanzx.com/163loakiuor.html

================================================================================
来源：http://www.sxryk.cn/163rdakuqhz.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163ccknmgyd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163mbcutwbn.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163dsurbbgp.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163yhlwkdrc.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163zuhwsdaj.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163apuxyfkb.html


<!-- 参考信息 -->