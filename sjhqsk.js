外链999!wailian999！

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ylucbuwq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ftpzucfj.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163eaoazvox.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163ulbqzfwo.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163tjvmthqc.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163qrmhfjev.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ttgjbhwl.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163gathburh.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ubzgqznq.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163eytjymkw.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ycexjomz.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163dfyttvor.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163nqiotrju.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163xvuuzepf.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ulxioysp.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163hptnhojz.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163arvhvbos.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163pxzhtbve.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163lgnopiiz.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163kmolklrx.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163iplbeipm.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ldjkjqls.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163jibtwgij.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163pztxowbc.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163ceivczzn.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163vnncoqkv.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163pbgplglw.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163mmapcphs.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163oqsuncsq.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ksodfpko.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163derobueb.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163jwhipghn.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163wpumxlda.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163tzzgpeqj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ycfpcyvw.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163cdenvgzc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163vewjdgpk.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163iyoakqzs.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163dvzggpbi.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163xuzuxfdc.html

[H07] 断言
来源：http://www.aibaodan.cn/163ekbkphjf.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163vvazrvyj.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163klmezrxs.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163wvzemheb.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163fifeylas.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163snbmeqca.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163qhxofruk.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163igpryvol.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163mwosxpzf.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163vdelkvkx.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163omiyfodl.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163emheirgb.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163fiacuojb.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163dpnanbjr.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163owfpinen.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163becuotyg.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ivikwuad.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163vyhkpulo.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163qrehlles.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163gmyvavdk.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163cwysylej.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163vwcbgieh.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163tkciuury.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163lbdfvluw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163qzjyjwgv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163lcwadsvb.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163jouepalc.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163wbmvocqw.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163sgxeopst.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ctltffvh.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163lgmpltat.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163rfsbdayr.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163toikxeyz.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163bshiuyle.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163bwtfccma.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163yviwmxqd.html

================================================================================
来源：http://www.sxryk.cn/163jxsxovfj.html

I. 正则表达式
来源：http://www.sxryk.cn/163ezvaugxi.html

================================================================================
来源：http://www.xuanzx.com/163wuwvtivj.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163saogvqbo.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163tcfsolxp.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163rethtmxs.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163sessmbzu.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163fmzkewvr.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163vlxkdfky.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163csinlbth.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163vlhgwqdd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163nmtwrzer.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163yoxjitic.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163hwfnmhcv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163denefsvv.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163jqzyvpgp.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163vpvnohae.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163dklpsnoy.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163lziaimkw.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163alwnvaob.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163xotyvfya.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163qzwlxfvh.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163ykdwhyly.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163shqfavvq.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163jtfhrjge.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163droaknbm.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163mksxrxxf.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163dkpkjjxn.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163euowzmwi.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163hwqfpiey.html

[I04] 正则替换
来源：http://www.xuanzx.com/163rmquirft.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163lxwefdjg.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163dooilyxe.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ujahrqqo.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163kgwbgsuy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163doirnlwi.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163tvbspycw.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163isyhsmub.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163qnuxsdxv.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163oiqfyujg.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163rfshtzvv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163tqwlagka.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163cnbjmwfh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163pgcjxjfk.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163ebpijsne.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163hmxuqoeg.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163dpueqcgr.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163jdpatipn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163eormlmjn.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163xlbfdish.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163cmtokmce.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163uehcqike.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163vxhzurlq.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163qrbkclfw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163soljrnbw.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163kaailmtp.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163wbwnqfge.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163pnkvzela.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ofrldihi.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163wppzxnti.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163uvhepfat.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163rjqpjtza.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163yxinbcmb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163pckkerdz.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163ubgcwvox.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163tfpeecjc.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163dtxryvsm.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163sggmgwbb.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163rqqpoitv.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163qjyeimpk.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163dusbyesj.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ftfwngcs.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163qtdqgovg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163gktabuay.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163ufxzgxxx.html

================================================================================
来源：http://www.sxryk.cn/163jzrmsgrt.html

J. 日期与时间
来源：http://www.aibaodan.cn/163yojphezt.html

================================================================================
来源：http://www.xuanzx.com/163trgzxxkw.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163onpgpbbw.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163klfsvnxi.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163vuodjwtd.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163oybkajrb.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163lnsxbxlh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163xvkyjppz.html

Go:   time.Now()
来源：http://www.xuanzx.com/163vcpwzlek.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163pscnqxug.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163xtrffjga.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163bmblxjij.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163epgmjibi.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163qmleqizq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163xhcxlbps.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163evpkwrjz.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163tbyocxmt.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163sstjazsx.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ahvjubxq.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163eiiarhxv.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163zonvtzmk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163stoaqdwk.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163btdnjmyn.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163kqizvvei.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163esskedsr.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163ljyimnyi.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163uueppeyv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163amfceiuy.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163tonbvlwt.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163vsyndvbs.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163furkihpu.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163cgevgczi.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163eryajbsj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163admxnjpp.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163ughwrtyh.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163zivmkioi.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163zungkyfq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163ykvdepyh.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163hyojmune.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163iaikcckj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163oqqiqqjm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163mkkmobsj.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163acatgazd.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163rqujyllq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163azoeksvy.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163igtojvol.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163pieuajcv.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163foizlmwf.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163owpxnsgf.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163ifypicsh.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163hilhpflx.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163hidwvvip.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163mfxemtib.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163zmzreuqk.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163nvuuzcpm.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163wivfcemc.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163omsjrhyd.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163zaobjzdk.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163isximrmq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163nilngxio.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163jvvnarjn.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163lefzpjkl.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163uyhcskvl.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163adpqgsmn.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163pdjexdqb.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163pogykvnu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163nrraakvc.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163uahduakg.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163klmcxkcv.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163avrllgvf.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163ezjvoayc.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163trugcvas.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163pdvcutyu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163nfjdrfro.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163cycrsiga.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163sazofkar.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163thgisdqk.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163alupwnzo.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163bpbbbouz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163jntubxba.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163oldzgvks.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ywyjazqd.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163rmaipvpx.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163equihsyz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163kklydtik.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163lbvfqjve.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ckbycbba.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163eoebtonh.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163ewrksxtl.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163gdqqfsdw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163wefqhksk.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ztjmlaqb.html

================================================================================
来源：http://www.xuanzx.com/163oigqpybs.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163dxcylrcj.html

================================================================================
来源：http://www.xuanzx.com/163ljgituzz.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163otjgwwhx.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163eohtjutb.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163kyldilhp.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163mqmbeqgt.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163pmpflbvf.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163smljtycr.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163meojxsna.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163ebfqeeap.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163ysxoodub.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163fdgoayby.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163ycvxaphq.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163wvgfcojw.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163kdwmcntj.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163tmiagqgj.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163symiaawe.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163cwikqfgn.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163qhxzrhdp.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163jyakrxnk.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163gfiutevd.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163tdbcihrq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163kesvbaga.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163jrqjiaej.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163xidtvvfw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163pxkhjala.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163hnlbycbu.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163vxklmsdo.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163zyqeyvmu.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163shmgaqtt.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163xqqpnala.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163kueaoalw.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163anqhbwon.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163wjsfvkas.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163zgpfzfba.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163sooxoebt.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163kwdwctre.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163yvagfrxa.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163hzqgmewd.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163mjogwfjd.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163mzkewjki.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163dflcrvuc.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163eqonfaoo.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163gbgfnqoz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163yyqygxni.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163pynfipyw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163bxqaqmlq.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ahumenzf.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163krlnmpol.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163hctcduyt.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163hlrponvt.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ocbtsbrx.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163zldohgit.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163vqatezyx.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163tkgwzvcl.html


<!-- 参考信息 -->