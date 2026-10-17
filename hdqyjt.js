外链999!wailian999！

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163zvsztysh.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163scyytjax.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163dscahbhi.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163hstxsrhv.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163mwwdijwo.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163itvgjjqo.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163fhmdofex.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163vwpsgmxs.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163jwwfhdbe.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163mxzarjna.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163vvhriipv.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163bigvxkgv.html

[H07] 断言
来源：http://www.sxryk.cn/163gprdffbe.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163rpehjxur.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163aicecjeq.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163vfbvcchj.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163aubgvzzy.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ozxfziwx.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163tsvafwlt.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163lhdpvdjy.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163gwrdlenh.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163qtdmqjky.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163cjqxfjgo.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163jeglgwna.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163tshhxsxg.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163lafnyzch.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163ojmitnhc.html

Go:   err.Error()
来源：http://www.xuanzx.com/163hpupfvxz.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163wmuxgopi.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163yblwqzbr.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163weelhqua.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163zipxjzzd.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163kihlxekq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163atzlbwfc.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163gpalbzlj.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163nrmlqznq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163iesrgdkf.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163zlzobexr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163clekvxpn.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163zbsqjotb.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163spdhofed.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163yjqwudtf.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163kqtvxpho.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163oxsegwns.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163htergyum.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ihbedsvp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163yvudadvt.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163ziwbjnqi.html

================================================================================
来源：http://www.aibaodan.cn/163pdlziwho.html

I. 正则表达式
来源：http://www.sxryk.cn/163evyxmhwy.html

================================================================================
来源：http://www.aibaodan.cn/163bvgdsdvo.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163pmfrhunb.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ygxelodz.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163dokcqgkw.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163qwjkmgov.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163egmaojol.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163nizylhnt.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163rrcqyecu.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163djdzfmft.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163wpfdhops.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163oragzzji.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163yocvnbeu.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163wncklvqe.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163exawhaho.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163gdnfdapv.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163humyliey.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163cruwpwsu.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163ftxnsnhl.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163zymcgskb.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163bowkkmvf.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163yfpnnlow.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163yxzylkjc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163nxfafvvi.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163vetgzmyp.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163blvudyci.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163hnyyggaw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ovozlywi.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163xijtizja.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163pzpdzyoo.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163vwezmegb.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163wrmwvhzl.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163vbehzqgc.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163alwmlbqz.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163ngiybxtr.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163mphxsegm.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163daezuxad.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163vkfvykas.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163wnhquvyt.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163svqxdnfn.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163vaabejut.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ptokaxdc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163wvlxmqbu.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163scfvzitm.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163hlofoxcf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163txhsjoae.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163kbfmqjwa.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163qcvuxlfo.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163wfngejqo.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163rrbwtirw.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ajvobrcn.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163hrpsyrpv.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163mshuvgii.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163zhhzkaxx.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163styrdiel.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163epzjgpqf.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163tmmnnqwq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163sejkuxun.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163mslmdxzs.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163dinnfric.html

TS:   /error/gim
来源：http://www.sxryk.cn/163zylipwfr.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163ynvsvovz.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163irifloij.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163yrapqlab.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163lfwfsdaw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163reirsjyo.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163ycjmduna.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163lnkolnpk.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163cqtiolln.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163iwwzxkaj.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163xvtqtswi.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163bzjqhfhc.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163mfeleixv.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163mhoocokm.html

================================================================================
来源：http://www.sxryk.cn/163mgrruyyu.html

J. 日期与时间
来源：http://www.aibaodan.cn/163dioazfdi.html

================================================================================
来源：http://www.xuanzx.com/163tvddxbmx.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163zmjvvrpr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163fyczsaxx.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163urkicqwe.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ahrfkwvk.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163knotrolo.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163eturbuyr.html

Go:   time.Now()
来源：http://www.xuanzx.com/163omemwqaz.html

Ruby: Time.now
来源：http://www.sxryk.cn/163esdvxgvb.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163rcgsnped.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163htjufomx.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163vhplbbnp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163atqdeqlv.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163bghfubjl.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163mzglaldo.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163aauayhyo.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163bijsquir.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163pswpeztj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163mskmmbon.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163ozqmsajc.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163lrpwmpki.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163wrclvrrc.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163rgqrpifb.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163agufgzwz.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163omklweqh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163xoxrhhgi.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163dkxtuvpe.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163rkkjrhfv.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163awsxnvqb.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163sydyekuf.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163cqwpuzzd.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163kpukfify.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163hwsctwtg.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163njrctold.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163tipvwtju.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163ugfknbdg.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163gvmsfihb.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163wxokblui.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163gepcchzf.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163gtgyipyd.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163gmjzdecg.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163xccpnbwu.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163cjywglgh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163xpfweykb.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163zqqfckfu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163tcaezcif.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ygtwfwpg.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163qoffakle.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163fjaslzti.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163uqblmsjg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163qjezjkgm.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163wuubdhrz.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ndiwykaq.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163zkdtybxd.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163vjinbhqr.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163gnnqkhyz.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163yhjzvxhy.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163elzuucvb.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163bzeymddy.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163szopftzb.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163bwmqespy.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163qrcqkqxo.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163hgvjfgfb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163eqwjrrfj.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163ftitumtj.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163bgsmnqqx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163lylmasbw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ogjbnjcl.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163tzsxpeyn.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163unvvvnzz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163whnelflg.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163arzsguho.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163cglxlrcx.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163vgrysxtr.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163iyjrgxzd.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163nzscgaso.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zgvayers.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163tctjwqxn.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163wfpmfvnj.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163fwdflvtp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163hxuiluaf.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163cvenxdaa.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163xzhlknip.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163lpdyptbz.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163nqzvqqdp.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163qhynftld.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163hjmzhcie.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163zwyylhdy.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163ejevlaxr.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163znbyagcg.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163stpcixjo.html

================================================================================
来源：http://www.sxryk.cn/163unfogiio.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163pvnvzaxy.html

================================================================================
来源：http://www.aibaodan.cn/163pzxocruf.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ozglllom.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163xypwzwfn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ptmzqmml.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ygrftqdh.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163wlnsvuaf.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163tmliwwpk.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163zxrhlopf.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163kqqopslw.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163lvcvsrph.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163xzrespjl.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163rqarewpn.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163xphbthlr.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163eoweyuha.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163vtorxuzu.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163bwsuioag.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163hyocwfeq.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163kwmyunzg.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163honmdnww.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163ukizjfiy.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163flyutzcg.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163eorwvaae.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163iqksfyxt.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163oerqivhs.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163iksvdjoq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163uxjvelqq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163bwinhdgx.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163zhieqjxe.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163fqtkalcq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163lgausngl.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163kfelpqff.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163txvylecm.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163kscvjvzg.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163eofdjxyj.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163dkjhuigl.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163hvqemgix.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163jlauksfn.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163dbqlmfsx.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163wrpbjqcd.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163oismtzgj.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163rzfycnya.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163zigumrme.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163norhrfnq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163svhybqcd.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163ywidwuba.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163rcwlgkzm.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ujlpwceq.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163zbnxztot.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163ibfporux.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163zwhjrxgu.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163zwyyfjol.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163cxrbjehf.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163mcmyvjwh.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163xzhkjunx.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163rjszoxuk.html

[K07] 进制转换
来源：http://www.xuanzx.com/163aqmtnxju.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163znysljpz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163cymntszs.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163tbzaslpb.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zoobnzmu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163swtqazlw.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163qteghsyg.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163yrgxmxtn.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163tdtznqvv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163txampvxb.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163jhsvkzym.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163lgrhflht.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163dqavhtzu.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163pfischbp.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163odyphfdt.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163qkkzodtz.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163prbsdsig.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163fkwpfnrp.html

================================================================================
来源：http://www.sxryk.cn/163vosxwbvy.html

L. 网络请求
来源：http://www.aibaodan.cn/163ywfmuihj.html

================================================================================
来源：http://www.aibaodan.cn/163iolvcdvz.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163tcpmsous.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163hqaozsmi.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ndfqofup.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163lsxjxdcu.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163garablia.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163rdpmboch.html


<!-- 参考信息 -->