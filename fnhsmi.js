外链999!wailian999！

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163sknhxhtj.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163llucudcj.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ngnvhdwb.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163upvaaemy.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163tvyrfgmr.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163tlimpfiu.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163etiswtmu.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163eubtibzk.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163coitstft.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163bkznvnkj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163gtrvpqns.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163lcittaoj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163odopfkzw.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163ixiyerjp.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163nmwsskcj.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163bwprwwik.html

[H07] 断言
来源：http://www.sxryk.cn/163hcgjwtgx.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163xdlfwrxv.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163kcoppgix.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163huqrvdwb.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163hpqslaao.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163scymvqeh.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163srnfngrn.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163xpecatem.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163tbtlqhfa.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163texgmkyb.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163hubrqqwt.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163aragvhaw.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163ncpgbrmn.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163grgtkgau.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163gkbpfltv.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163vwhjrjvi.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163alvatqfz.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163cddepcpg.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163krqbdomw.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163gjfsrrkl.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163rcrmfvwv.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163hvdhcsce.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163dwibgbzp.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163wqqsgvvd.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163ohtmbyop.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163oteaujca.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163xijcptec.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163lerjvusd.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163jsdflphu.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163pkottxur.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163fsksgows.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163eyixjjmm.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163uuotxyri.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163kvcnxehj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163ambagghf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163sgomwaai.html

================================================================================
来源：http://www.sxryk.cn/163kvcyzwtg.html

I. 正则表达式
来源：http://www.aibaodan.cn/163vkgduogj.html

================================================================================
来源：http://www.sxryk.cn/163yiibeuea.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163jzlhpfnu.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163okgawrtc.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163qtrjmako.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163lwmxasoc.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163jyhkxcun.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163bdsnhtbg.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163ikxkntst.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163nufohqbp.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163ijvgukpe.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ebmtwnje.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163ndimjtye.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163lvmqysvr.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163olpbaxze.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163rbjlhavi.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163oqqzrpud.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163ymlirtdt.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163nspizfne.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163vnxhtgcf.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163cruhjaos.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163ufykivuw.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163tnrhhpum.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163eknlaaqd.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163pimfghqb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163zqrjrfag.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163cknmaodg.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ofczoslt.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163wqigttzk.html

[I04] 正则替换
来源：http://www.xuanzx.com/163oancprdh.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ynhxhhfc.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163olzzpbod.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ytmdnbxd.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ljaehoge.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163gtqwvtfj.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163hzhlhlfs.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163zzlavzum.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163rmpfsuzs.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163gkzaonxt.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163kmkupnkj.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ppqdhbul.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163wgmranbm.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163kmisouot.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163phfenfgp.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163djjpzsdk.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hubjixsf.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163wdextria.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163wabnffjf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163njnxvuoh.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163fhbkftdb.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ndympfqq.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163zdzouflk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163idmlbbea.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163askfxkyw.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163ucfbciho.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163xlbccnng.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163snfartti.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163xjuhyrtc.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163wzsglmmv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163lwyyrnnb.html

TS:   /error/gim
来源：http://www.sxryk.cn/163hyxwsoka.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163naboasnm.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163tyooyolo.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163eaabxamv.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163utafurhp.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163tsgwhfde.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163qhvryjeo.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163xrmjqwnx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163gqkhbwqz.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163qvzhatcw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163qrthabgy.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163qcsgjvww.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163osbhhfpm.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163muyhhknj.html

================================================================================
来源：http://www.xuanzx.com/163esuhoywo.html

J. 日期与时间
来源：http://www.xuanzx.com/163detvqgys.html

================================================================================
来源：http://www.xuanzx.com/163wmaruzus.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163otjueofx.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163oeggqlfs.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163byytoimd.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163frvzitda.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ukhvkbkn.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163leojmmpb.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163ggxueovd.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163xqexjibz.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163bazinhwk.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163hurmvlbi.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163tcuadzaa.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163hehokcvx.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163coehitrm.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163wvlaruus.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163orbqmfzc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163hsyjiegt.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163nqxijbxj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163loavmuov.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163fiybtaot.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163dikjbppz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163jintverb.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163wuciesko.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163qujylelb.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163rufdwxdb.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163cxeezjas.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163tonzlbzg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163dllhzlfm.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163owtainap.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163zkwihkyf.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163utqbqntd.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163ankvsmvj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163dfrcvwva.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163ugltrkhd.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163fzqmktve.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163uhtzpbzx.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163cudldrbq.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163sjzqilpg.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163wwigckbp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163rtaqvpxl.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qiyoeuuw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163rwevwmqm.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163zuflzupn.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163uanomzhm.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163ydyimhmc.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163nsxlgglg.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163cixojbij.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163gwrhiugy.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163ykjwlmew.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163dnjsurmj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ifqnftzx.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163evbzhdln.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163jkuaxslz.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163jorhnqiy.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163vijinnpy.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163itelvswp.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163kdpyudsa.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163slnipout.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163fvkdzboj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ahelydgs.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163gyaxstns.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163lyfplhhi.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mtzxwkgz.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163nodsohhi.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163kclkzjym.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163hfdcauho.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163zbzsasdm.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163oclcteaz.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163jhwrnexb.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163buxlrmyg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163arrcatkf.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163fkgdpcku.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163cjontdpf.html

[J09] 时区处理
来源：http://www.xuanzx.com/163efrfetql.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163xrhbylfw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163dhgcusoz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163lbmmbtdm.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163txhkuryr.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163nmxlxtlr.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163cfpzesoy.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163pvyvviuq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163zifzcbhc.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163mjoupolx.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163lvzbyewb.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163jgjzusdo.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163ughrobaa.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163fuzejzqu.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163qmpamryn.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163jpxfqqch.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163tmgqkygb.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163cbaehldv.html

================================================================================
来源：http://www.xuanzx.com/163pdmrrnsf.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163hkahtflj.html

================================================================================
来源：http://www.xuanzx.com/163zkilbfqz.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163dixniidi.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163pixkehaj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163qfrkgjie.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163xcmkshdn.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163syumqahk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163ahlnvucn.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163oxaobupc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163gtzifwmr.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163cjqnqern.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163rxjmtkzm.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163xbbiimfl.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163genevopm.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163hgsxnufb.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163bwcphxvc.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163syeakmtr.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163bpozvzei.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163avplnskf.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163mioiwqyh.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163sgxobhoq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163axzjxabq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163gufykcvy.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163inhijmvv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163yedudxtt.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163uuxxcbjg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163ufcgwxmv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163ahbiagsu.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163ndnkbxba.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163emvpqvkv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163tmsfdesi.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163icwkblrr.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163cefqzbhc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ptkgujoh.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163dlecptve.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163nucrfcem.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163oeqllqaq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163cdascqqp.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163lkzqlnvv.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163dbfcgzff.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163osyqnwdf.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163mbblbiqt.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163bmhnynkr.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163qlhhdkde.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163thvrmuvd.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163nbikcdln.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163dldbyhny.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163uacpiqcx.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163wtenlqde.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163heypglqk.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163lfbowucg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ormqfxva.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163gxqfquxb.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163tldqlusm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163xtxopnap.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163xyxvtxwm.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163fbkcyoyv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163orkthylj.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163tiyczhsx.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163dvgrvdck.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163nmhnedqr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163othvxvwf.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163herormxl.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163uvhhbjeu.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163chofkxhi.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163iakpjrdi.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163dakbpene.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163ikwjnhyb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163xkxzrntg.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163dozpowgu.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163qpuxsvlu.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163oohoacte.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163jmdbzmxm.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163sbtvmirk.html

================================================================================
来源：http://www.aibaodan.cn/163fvzhxhwz.html

L. 网络请求
来源：http://www.aibaodan.cn/163ckqivetk.html

================================================================================
来源：http://www.xuanzx.com/163njbulkxb.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163czjhstsk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163szwtdwks.html


<!-- 参考信息 -->