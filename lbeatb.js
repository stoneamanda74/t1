外链999!wailian999！

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163wkfxfyro.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163efbxmlbj.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163lrrrhsqr.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163jzjaiehw.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163hhuvwabk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163nkuqgouc.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163mgonnrdt.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163eqzkwqre.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163dlmbkqjo.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163gwhnuydy.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163vmtxgwxs.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163npykwvkt.html

[H07] 断言
来源：http://www.aibaodan.cn/163iogxuvcv.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163vzsvmksp.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163qjoiwphk.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163dzhlaalj.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ecafwrmp.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163deojehan.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163lrttkfvr.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163zdlmghnj.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163pbsxljcr.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163ghwdkkzi.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163hzkcgiea.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163mbapfvdk.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163jelbfnoz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163fpybpxdq.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163ejeqhrye.html

Go:   err.Error()
来源：http://www.sxryk.cn/163ilxzuajp.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163urmmbgks.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163zsgjomgo.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ruqwyhit.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ipqxqmbc.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163ktudsrjv.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163dbrzrcqg.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163ljbfxdpb.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163hnewrbit.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163tcypplqw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163ljkvsecf.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163nfvewrdy.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163kqalqeks.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163jmvzincj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163tiuuzaef.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163cyhmkiey.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163zirqlbhh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163kimwsrln.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163hjnvpomu.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163fveoalov.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163hwrbxyje.html

================================================================================
来源：http://www.aibaodan.cn/163wozbqccd.html

I. 正则表达式
来源：http://www.aibaodan.cn/163elzjnzid.html

================================================================================
来源：http://www.sxryk.cn/163xnchojil.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163crspndzb.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163gmodwftv.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163zgjfogao.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ciuyookt.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163otrmoidu.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163pmlyejsm.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163xegfqsfo.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163gxhuzkow.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163afskzpjg.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163doqhhmrs.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163egrrnkcl.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163efdywfnq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163vwjnlwth.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163eizjzzff.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163emtjlfdm.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163mvpbgaqc.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163zlaxgajt.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163rtxthnkz.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163jdnmbddh.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163fsscbpde.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163lxsmytlo.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163puybgvkd.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163syyoimpn.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163cxerlcxm.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163orajjdsk.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163eezergmg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163fzhgoydy.html

[I04] 正则替换
来源：http://www.xuanzx.com/163fqafkpgx.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163rzfhowwb.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163actdyala.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163hxrjrzek.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163dnnmfuzd.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163ysuegjqm.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163fkexsnof.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163pvqgstic.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163nnrjmdyo.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163ihdvdzmp.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163dlxdguaj.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163hgtfpdtm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163lmqgeobc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163bzxmcqjy.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163xvevpobl.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163pnywzyvp.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163hpupklim.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163oqzfrxfo.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163brxawopn.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163atirtfcv.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163uhdafbjx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163tnndtyjk.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163yvfxumhg.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163izuzvkte.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163weiercbi.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163yfbhsyfu.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163khlnlnrz.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163emszfltc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163tybfgxmv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163ylpjpqjr.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163ylmdceut.html

TS:   /error/gim
来源：http://www.sxryk.cn/163rlmhhdju.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163zsdmkxyp.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163asjetnsp.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163cczckeoo.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163uekovfvu.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163igzxjtal.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163keitiona.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163jbedikvt.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163hrvvjzbv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ljuttbqr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163guxqhafj.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ipaiwlhj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163pnpdewte.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163hbtsyazp.html

================================================================================
来源：http://www.sxryk.cn/163onoikkeh.html

J. 日期与时间
来源：http://www.sxryk.cn/163qpeofodq.html

================================================================================
来源：http://www.aibaodan.cn/163qayqxytz.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163jgooeawq.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163nsuotlqt.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163lfdtzgms.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ydkarjxt.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163olkmsopv.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163jlmdsdys.html

Go:   time.Now()
来源：http://www.xuanzx.com/163eipnqgtr.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ypwvwydx.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163fyppvjlt.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163bjokdoqz.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163kyzsiaog.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163gfxcgqvw.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163udmovejq.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163rjzjgibp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163txssbkzx.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163jwokscrx.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163rcotuuvf.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163lsqiftqy.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163pbmcdfef.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163haanjjfv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163mrgzmwwr.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163vhxpzavi.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163vxcutqym.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163rxplztpa.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163kevhccug.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163zapbvvub.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163jlevggjn.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163ljmakozk.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163azmrqkrw.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163jevgdhue.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163pteulban.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163bqxnbxfp.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163ssrpxqbr.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163doccyirk.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163dwztujsh.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163lolzjfvm.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163wokogqoe.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163mkwabzvf.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163kdnmyiml.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163wqytkfwa.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qghwdjpr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163zxhhgyio.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163bunvzazt.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163flpieapu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163wfybjmkx.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163sntpzwrg.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163zyllilhh.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163fxlaxtwk.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163aiemnwca.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163nqiahtam.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163wtojeonl.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163gztxnhkz.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163vowvnyea.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163huwykxne.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163xplbsghm.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mqekrwls.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163jivnmrjy.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ryqaaquz.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163wdwmtqjw.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163ptzelzgb.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ggbmlygt.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ncnudsud.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163kttgglij.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163nmwxwuhc.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163jbsmgngv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163tcywbuhz.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163tfelwdhb.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163qbixgahf.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163lpvowupr.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163tscmsdcl.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163khezejkv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163kwfqvpwk.html

[J09] 时区处理
来源：http://www.sxryk.cn/163hhvrtrgq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163jlmmvnge.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163rgbpnmdp.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ttsapgbb.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163urhdyaaf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163bdndgxhu.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163kupjzpso.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163gzakyoif.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163wsrtaraj.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163mhlalsyo.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163juftyooe.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163zqqfpljo.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163eyrwekag.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163fpttyejr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163nhtygpei.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163iyaenrjg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163bdoilcgw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ndbuvciy.html

================================================================================
来源：http://www.sxryk.cn/163xkxzimej.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163pllgjmcp.html

================================================================================
来源：http://www.sxryk.cn/163mlsynuxf.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163rpbkmbzw.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163hiwxvrwq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163koilfhir.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163onaiquvl.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163odwxzldt.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163iukghhji.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163vtouzkpm.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163zfbnvqxz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163wlmgkbjc.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163qcbsnkzq.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163kcmlfqbi.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163gbjrgwqa.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163swkjmuvm.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163wihywcyo.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163lbooavqa.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163auayemdk.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163rvfdzhjj.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163nrnmrtzg.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163nfibdhkq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163qceefgya.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163hlqjegkb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163yqhwjcrx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163wwphixpm.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163ocwvsans.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163vaijttoc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163ekgfluuy.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163hgsunibx.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163xzrjxnve.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163xobrcrxo.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163xczdwcbk.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163tjwkfylq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163igvlirzb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163gqtwaaer.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163daddoclg.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163erypvtjt.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163nfwtzubu.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163mkywvjhu.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163kpbobpde.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163byyfddwx.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163pyqfhpiu.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ivyrqwoh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163alaxyktm.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163zibmfgwk.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163nccomciy.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163nuxjcriq.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163ffmnnfsm.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163bgisljmk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163fytfhheo.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163kiseczvn.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163qoqgobke.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163xchsrros.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163nyfbdviu.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163jewtxxph.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163ontoblrn.html

[K07] 进制转换
来源：http://www.sxryk.cn/163gzcsvcqf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163maeyiscg.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163bblugqzp.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163kdvbkbqn.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163epovewwh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163vdswkbww.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163qbqvccpo.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163ddzezgru.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163qssywngu.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163jnhsbltl.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163cxuchnkb.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163mnrgeddw.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163gxtgxlyt.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163xvigbubv.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163lkonapad.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163orzvslia.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163wovbqqnb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163ipmlvovn.html

================================================================================
来源：http://www.sxryk.cn/163ihgtgbpz.html

L. 网络请求
来源：http://www.sxryk.cn/163yepawgxm.html

================================================================================
来源：http://www.aibaodan.cn/163rubsrvkp.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163xzirndqz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163tnerpmir.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163uboyxfjm.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163ddlxkrnc.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163bkharuex.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163thfvxael.html


<!-- 参考信息 -->