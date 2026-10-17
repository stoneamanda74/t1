外链999!wailian999！

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163qoyxmdvl.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163uqinxemk.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163azlipqav.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163pyqugzty.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163qvhkcmzg.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163whokbxew.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163ujmexhhi.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163rzrjdvie.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163jafwyfsa.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163rolagwmx.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163pzteoqtg.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163pysodlag.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163cuhiiahz.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163rybyktog.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163lqwammii.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163jhhvndbx.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163zdzyzsjn.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163fmbsxkjk.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163kuixcdio.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163kjeeexuj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163rjhxpnbb.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163oszxjnhp.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163fnbahgqa.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163trnvtbfr.html

[H07] 断言
来源：http://www.xuanzx.com/163llzdpplv.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163wdfrzloe.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163eacaajek.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163piawnucp.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163prxdsfmt.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163vfogqgtn.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163ceoknpzo.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163sqljhpzb.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163enblwicq.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163nmkupudk.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163zykfsicw.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163vmibfhyd.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163cdycxmmf.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163qxmbrcmj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163sqkwehfg.html

Go:   err.Error()
来源：http://www.sxryk.cn/163bmgtxyef.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163tofnpaqf.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163gejkzboh.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163hyirolct.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163wdwgpvxf.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163hvfotokp.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163ybbfzsej.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163ytpequgt.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163vrljubyx.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163pwlwrxmy.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163lsfvsnry.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163cdcswcnv.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163kcalkods.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163hoyraelr.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163lbjvmhhr.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163djijtvow.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163tmoschtv.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163szkrqaeg.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163vjetfnpy.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163bgegpbav.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163efskxnys.html

================================================================================
来源：http://www.xuanzx.com/163spheecux.html

I. 正则表达式
来源：http://www.sxryk.cn/163hunjlfep.html

================================================================================
来源：http://www.sxryk.cn/163bfjzugml.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163pmdyujda.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163vadzjppu.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163jdsdkadl.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163mfswbluk.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163prismbcx.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163einmvqek.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163shdubfxw.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163nghgqzes.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163uqvicdac.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163dsdrcfzn.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163bajiuira.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163cltekkft.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163lgnjenod.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163xbtfxafh.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163hlvtbwjr.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163siisgzpz.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163hskkgxgm.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163fimjxuyw.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163nevtuwff.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163mwhhirjz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163nssoccoj.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163vftpulsd.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163hjqlyaqe.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163dknlozfz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163qrldslue.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163linujfmn.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163dfzuqvys.html

[I04] 正则替换
来源：http://www.xuanzx.com/163ffffseiz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163dfbamdql.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163pvbbfmtc.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163rehextct.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163wccmzuui.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163rwttpdhg.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163iynpttvh.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163tcibbwxu.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163hpsxicuf.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163xuqijjyv.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163jxdeygpr.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163wuqcnibr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gvrmpbrg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163moykbsxy.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163wvafkxac.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163gaaphesq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jsiqjiza.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163whrrqazh.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163iaqfbchi.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ajzjqxfs.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163bfkwunyg.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163swttaozs.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163vnhyfjgp.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163rzvnldrb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163skuveqpo.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163thavuctj.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163tqsotsyo.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163enpglfhy.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163qtaaeozr.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163rqyqxtdw.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163egduzybj.html

TS:   /error/gim
来源：http://www.sxryk.cn/163poxvjxzv.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163yklznayi.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163zndomypv.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163ssqtjepr.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163aapwzram.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163agghnykb.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163bukifpoq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163umejrmos.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163aagunnfi.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163spzwpryu.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163vbgqzcqw.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163zpfixawr.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163myqfyaod.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163uiklbohc.html

================================================================================
来源：http://www.xuanzx.com/163qkzwnvpy.html

J. 日期与时间
来源：http://www.xuanzx.com/163tlioxnix.html

================================================================================
来源：http://www.aibaodan.cn/163kqjymbny.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163lmmflixu.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163ufunngka.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163cscxhhwe.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163bktnyxkm.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163bxocccjm.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163daumzcku.html

Go:   time.Now()
来源：http://www.xuanzx.com/163huazqznw.html

Ruby: Time.now
来源：http://www.sxryk.cn/163cnkrreke.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163irtslrny.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163nfgucksd.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163idqvwlro.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163btthfcau.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163rewxhiek.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163ebfcsazj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163tzjowegd.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163pmfnyljv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ljjxcolv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163uvandawp.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163cqsvntkc.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163qwtdvbkx.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163gmlqunff.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163mkzcttwo.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163myhxfvmw.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163luvwqddo.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163wsltaiqz.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163wjnmbcwc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163gwijhozk.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163tkmcwehl.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163adqusjus.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163rtmeaoev.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163pjjyoygl.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163nmlqlkdi.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ocabimzs.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163vrwhiqnr.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163sokiolin.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163uablptwv.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163tojhkrwt.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163selrdzvl.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163aryodaad.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163xcqhetjs.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163jsvwcefn.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163qtzjmyrz.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163upsijcki.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163blavznec.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ydqwryeb.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163jpakrusl.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163liztuopn.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163gkaqzlrj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163umjzsxpy.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ptcxrfom.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163bdlanlzw.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163hlefbzpb.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163avifprvx.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163zaehfmpb.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163ozhehgtv.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163aixbanyy.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163jilgroey.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163neevukvc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ljxugeyi.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163vxprtkbl.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163hblljgzz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163pwibvdmh.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qrvtrgga.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163hmkbukjt.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163hjfnlgbt.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163czhtlegx.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163akvjoknb.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163kltgdjjb.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163dntdsukv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163mbryxegp.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ivesqyst.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163apvamkxv.html

[J09] 时区处理
来源：http://www.sxryk.cn/163ylmrwfcx.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163dobnduag.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163gpznplal.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163rabyvrbb.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163mbynmrhn.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163ukykxzuh.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163zruiqjmo.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163swlandqw.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163jgglqicj.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163mnmisbgv.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163wvvbgwcs.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163birxwhzf.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163sxudaisn.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163rocitltw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163gxoqcrlx.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163eyrhpjby.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163tuvebqns.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163wlaqvnhq.html

================================================================================
来源：http://www.xuanzx.com/163baafkebr.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163vwmdqjov.html

================================================================================
来源：http://www.aibaodan.cn/163xjbhjsqt.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ozowetux.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163nuhujdus.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163zhugsqkd.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163kzghfums.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163wyerpxli.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163dginwqyt.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163nnhmvpxk.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163byunsxjt.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163ryrusslh.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163oituqliv.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ddbrajak.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163qrrxqcvt.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163tdestlia.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163yotuzsuk.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163wbaijwof.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163zrynryiq.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163awvhpvvp.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163sfchfavs.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163fzhvibeg.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163zgekkqyq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163hwmenkat.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163yzyhbbvm.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163dkjhxekj.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163xhvukajq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163eqacptpn.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163tkevrkfu.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163xoamolfy.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163cljmdmbx.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163vuekwwco.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163whdnvruv.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163obpkvkdj.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163zoodgcop.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163epvltmfo.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163icbalzys.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163idxgeerd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163jypqhtqv.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163xkoqbjqn.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163pjinwvov.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163abjkweig.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163lxrzomkr.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163jkvmnjpe.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163idggchms.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ostnblxi.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163uhdmcouz.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163hgldebop.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163nxlzrgli.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163abmqgatu.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163epjyznnm.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163cbaewdfj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163njmvgscq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163acbpwjge.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163alhsoeuq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163lfcclnqx.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163accuzjgs.html

[K07] 进制转换
来源：http://www.xuanzx.com/163hrjhjiak.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163mxxyfcsh.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163yyznoqna.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163gqeltxda.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163cvezneig.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163mcwraako.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163jtpwzcen.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163vnzgonyf.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163aqcjbvxi.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163bvhjnvkg.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163jloetroe.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163pzznckhg.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163vfyzvrgy.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163uhhvgfhk.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163tkxlnsum.html


<!-- 参考信息 -->