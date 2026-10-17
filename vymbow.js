外链999!wailian999！

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163vqwyfgcx.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163zthqqxvr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zbtdzzda.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163vdiejlgv.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163scbmdmoi.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163nkntnaek.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163znabwbag.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163gfiyfqrz.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163jejwauop.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163crhkanqy.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ecezndam.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163kuwlsdex.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163mobcqrfu.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163fwufjjku.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163ecalbihn.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163abwdjfjw.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163edlwsijr.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163fvhqpcyk.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163tadfywkt.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163gjhkkibs.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ohikxesa.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163tdteiswm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163bbvcthvp.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163urmqpieg.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163udkhsaad.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163rvkbmvzw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163pvyhyquc.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163brlsrohh.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163evhkwzwz.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163dwqezmfr.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163dbixjbzk.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ociamrfc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163jiyjmhwm.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163plbqffon.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163kvlbrpeu.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163vaaregqy.html

[H07] 断言
来源：http://www.xuanzx.com/163gpwbhpbd.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163bvndtgcq.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163pmqmmidf.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163jazjrifi.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163nogiirdq.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163imwsjqwy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163jzcmumlz.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163twrrhgdj.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163csgcovqb.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163qdlhtgae.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163cxonkpai.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163vmpchdfk.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163vubhrums.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163xguzjgdt.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163tauuzluf.html

Go:   err.Error()
来源：http://www.sxryk.cn/163obljdzun.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163fcrbambb.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163smogjvbt.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163yfpjpuyy.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163emegirks.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163yuasewns.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163xxbtvalw.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163fhefldjl.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163hjbqvewv.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163ixvogtza.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163ucmejwtn.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163vvbhebgr.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163nyiyskrq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ddzwgqlb.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163svfurzxp.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163jlylnyeu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163xgmbhnvk.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163cjtztsxf.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163fqffuehu.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163mcqxurjl.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163zdiylxdb.html

================================================================================
来源：http://www.sxryk.cn/163itlbvfmi.html

I. 正则表达式
来源：http://www.xuanzx.com/163ejsvqkkc.html

================================================================================
来源：http://www.xuanzx.com/163iajwmzpq.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163dqnoumri.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163flzkmrjj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163lqsyuhhv.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163wehtyclv.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163shpyszes.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163sjootoov.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163ccdgxpju.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163hjsptxvj.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163xmwsxfcm.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163xajlbfhn.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163wlctpjcw.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163tblwygul.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163ufqiloxt.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163metmpjhq.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163srponyvn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163ovkpmazn.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163tehkuvzd.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163vqrrwaqt.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163gzgvnnnx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163tzdmojpm.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163zwguojjv.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163llimnwlu.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163iisuyogi.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163njbzlxkn.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163fmoaukgr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163lxvateoh.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163gnkqsziz.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163kbbklzpx.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163idleazts.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163nyswjiqz.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163mueqayna.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163kypwznod.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163uhaybdug.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163esjfufan.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163pnimkzsz.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163hmkjwwbe.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163kxvjtiyl.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163kbhkjjad.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163czcruauq.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hvammghd.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163vpdevqly.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163frnneqya.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163jzbfjzfs.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163pjfblbph.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163citpfoip.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163kjprcrfw.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163jknfipey.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163rugzomhc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163drpvyplb.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163dirqvpyr.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163ftdqtnms.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163nuswfmoe.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163utnenyyr.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163wwrvhvof.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163exxdcobc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163pnzglohw.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163rexqxaiu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163olslbhmk.html

TS:   /error/gim
来源：http://www.xuanzx.com/163efzgmpcq.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163sukuibpd.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163uesflwmd.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163nrlcgpen.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163aqhvufsb.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163veuddwyn.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163wxseqhyn.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163edjqheim.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163plrlrzkt.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163gembcmxa.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163pgkvtjbt.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163mxctmmhp.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163khbzndjs.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163lweaqqug.html

================================================================================
来源：http://www.aibaodan.cn/163njofqxps.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ffyjomwk.html

================================================================================
来源：http://www.aibaodan.cn/163jrojqckf.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163pdsnsfmt.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163tndpzvfb.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163qdaghqsh.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163fjozoxnb.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163gnfgnblw.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163rkbsvtot.html

Go:   time.Now()
来源：http://www.sxryk.cn/163viqqmbpn.html

Ruby: Time.now
来源：http://www.xuanzx.com/163houmkozd.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163cfeaaeqh.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163kfwlidvn.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163oymfmsch.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163edzuxoho.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163kulwchyt.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163hrhumdqe.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163hrrccqqx.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163exzvepgk.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163tprfmyex.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163duwkxopu.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163ejgsceyj.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163gjcpuopq.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163cypdllez.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163atipkffg.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163tcrunzok.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163wunvdzty.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163gsqjagev.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163lrkekptb.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163lavmpebc.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163vcxwoilj.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163mywxjxpk.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163yhdolson.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163dgsnxkvg.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163pesegxcv.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163bzfnlgcb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163nolkhnbh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163qearzjve.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163jcjvofyi.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163qvrxoylz.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163dfxuitrw.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163coetwpcv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qxfbhdtg.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163kijoyusp.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163yziubcqt.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163tweavpdy.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163pzmerkne.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163psrmgjgk.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163qqifmiie.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163arwcceoc.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ibldgxko.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163quslmdvd.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163zgpwhggg.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163dfmgxpwf.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163orupucjh.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163jouzbtzp.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163sgabtqgv.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163vemhecdl.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163gmlypsgo.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163aorwicbo.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163cmmpweod.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163lzfuhnlc.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163bvsnabjr.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163vxnxpgwc.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163sfkgbpot.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vbbiwipf.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163yhujipll.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163aoryocmx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163jkwsethr.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163zkakzufx.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163amsgktup.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163tvggvzag.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163rbwxyktb.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163mgmhnpcf.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163aeebdlyf.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163rlledzoh.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163nhvflsud.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163iydwlozu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163hoxmaoor.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163jvvmgoru.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163nzoxuzuf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163wqdjxuji.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163muiiiayy.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163cykrsigu.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163hqngboqz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163hkiytwgc.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163qgwaijni.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163rwirffde.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163rfvraqsv.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163euuinvlo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163ajipirgy.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163lcpjcaxp.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163olcotidb.html

================================================================================
来源：http://www.sxryk.cn/163dndxvebj.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163goevazmf.html

================================================================================
来源：http://www.xuanzx.com/163qynirity.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163qbjoviye.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ztnezfcs.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163pueiitja.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163yjcergde.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163bejpmbhb.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163syafdpak.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163cvscxind.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163eskwdqaj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163posoyvkp.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ecifjfqj.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163ejofodqq.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163dunvlpjd.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ywctjror.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163tnrzovyl.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163rydibsqr.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163gwckbzrl.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163ajbbzhau.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163sdgzvlxn.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163opzkiakw.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163skgombcx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163uqdfbmvk.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163omxtmmee.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163irvzcnxb.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163qjtqvugz.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163tjykqnzs.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163czdqwulj.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163gmkvsnzt.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163jujfffxa.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163nwlcukqb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163pggfjhbq.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ldoqoanu.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163yeliyuvt.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163zkinyeob.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163wzzinbeu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163qriiolrj.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163jqvqhlnx.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163eoxdrsiw.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163tsyfxtxs.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163aggtxkqz.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ntpaekgy.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163alrrxcdj.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163vyzhjgpb.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163zmnemvgy.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163ajzdzrsf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163ixvysebk.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163kmwmzibv.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163scwrrrzt.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163eivqdldw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163fwxdwiys.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163xxqmgsrz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163epbrasgx.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163qqcvkwxy.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163yllmzcsd.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163sxwoxazg.html

[K07] 进制转换
来源：http://www.sxryk.cn/163msvxwyjp.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163taerbsqg.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163yqywscnu.html


<!-- 参考信息 -->