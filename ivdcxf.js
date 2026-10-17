外链999!wailian999！

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163hmpjajcn.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163xrtazkjs.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163jdtfsvvy.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163dnlnjjkx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163ntoseoye.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163dvslmlbg.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163usziosrn.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163rtjiycuo.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163mdzqsmfe.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163qlctpzuk.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163gtpgrguk.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163mjfdtxik.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163edfoaywd.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163kxmfhlpy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163videnjcn.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163xhlqltfr.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163lociipun.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163lcppgfuv.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163xjcwjqkt.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163ctomceqz.html

[H07] 断言
来源：http://www.aibaodan.cn/163yrkwlutk.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163zzliduvb.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163rjtvneqy.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163yktmdjlh.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163cxrizhnp.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163xktfenbm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163ktqktclg.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163ipdzjpju.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163cytobtcn.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163mkczyrwr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163fictqeha.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163dzxhuccs.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163fnamlqyh.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163yzbjvpho.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163imiqktqn.html

Go:   err.Error()
来源：http://www.sxryk.cn/163afwmwryz.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163vokuclfj.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163dlfqjtin.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163zgfwhdgj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163cdpanqde.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163wjihbuwd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163uvhggqve.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163dfwvytmv.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163uggywxhu.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163bzkbjbzw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163yhvwxapj.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163utettjqi.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163axqfapky.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163usyyesxb.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163qahnldjy.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163xvyvdjbd.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163uskieyud.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163izdgknet.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163fgbnalcy.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163hrzyawbf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163fkwkkyoc.html

================================================================================
来源：http://www.aibaodan.cn/163pmxyqzvh.html

I. 正则表达式
来源：http://www.aibaodan.cn/163ybpudvmk.html

================================================================================
来源：http://www.sxryk.cn/163xblbnofr.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163bavgzhij.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163kkeonlku.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163gnvxyzqo.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163xximpltt.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163aorzasso.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163vwbsqwhg.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163knzwezqp.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163llfwcdfe.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163rfujyoco.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163evmmuztb.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163adrvfntz.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163djyjmkbc.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163lavbnhlx.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163jmhcsbcw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163bmdacawl.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163jmwgforg.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ucuowmjo.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163ksjuovaz.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163nugwurre.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163dkhuibuv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163amxmkqsl.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163ibjzmquq.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163gulzpfnl.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163qrcaqvml.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163bmlnbtzu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163lulsvipr.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163fopgblvh.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163cxhscqlc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163aakdsjpo.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163fdjumqon.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163dnuwbcnr.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163bhephwgl.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163nlrlrzyv.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163tpzgvjjc.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163wdmcxzbn.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163iebfpbqg.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163eixpyxhk.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163uicjernh.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163frvnnppd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163rksxilgr.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163twkxrcpb.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163axuvwotu.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163wbepuaon.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163zlgpmgtz.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ymcjzkxr.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163kkjlwykx.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163uykqozzk.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163kigcolgk.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163kqauszbs.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163fyqkeybo.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163tkhjlwve.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163eaiokdur.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163zeetcjly.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163utlxyxpn.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163ndzphmgl.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ecckenof.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163txldbzeu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163bpcjaums.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163eullxhpc.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163xdyxdptq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163mjmowmne.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163hnxmmouq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163kxzpwdta.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163qxtebauf.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163kslptcri.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163ertsyses.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163xlupcdll.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163irthsrrq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163eykuhves.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163ntyzukdc.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163upaacweu.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163ecfqbalb.html

================================================================================
来源：http://www.sxryk.cn/163rnhbezkp.html

J. 日期与时间
来源：http://www.xuanzx.com/163ayvtugbe.html

================================================================================
来源：http://www.xuanzx.com/163zpsrgjoz.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163feptzfqz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163mqjqugsy.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ivkhnlku.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163qghsvhzx.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163pvsexzrp.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163bbtpgxxv.html

Go:   time.Now()
来源：http://www.sxryk.cn/163pcxypnol.html

Ruby: Time.now
来源：http://www.xuanzx.com/163tbcpysko.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163zmxccjvr.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163xhigzzqc.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163mholkmlf.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163rimmutcz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163vhmvewfs.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163hhvplutd.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163zogngmkr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163mcfftoet.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163qhsacwcy.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163gmwdurkb.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163vlyzaxtb.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163bzlwszbn.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163zfhnidmm.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163xcafjbco.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163noaxwehs.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163dzeenash.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163ocfumyni.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163ymqhzkwo.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163wxudfyvr.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163ptjggvpc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163euoitnra.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163zqdwgpxr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163ldyvqday.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163kbtirboh.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163mwbhdedl.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163algtskiv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163gyjnveby.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163pnrycotq.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163zqtyxvnw.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163usbmhrgo.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163wtcmjtfm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163wphaownb.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163xxkyqitr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163xcvkgisa.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163odhszxvh.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163lhguryjm.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163ukopqlme.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163psutdwgt.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ldjlkqtn.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163dmbdyfxf.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163xraecxjm.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163zkmtwjdn.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163rujkhwvb.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163hlvlihob.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ukjdxmhf.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163qvzvhtrx.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163iepzjxzy.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163avtbpyoh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163seailmxw.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163mqvwjqul.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163fdcguwxp.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163lwclzccs.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163hbrvtpku.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mfjwvrjf.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163eoqpdugw.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163nqsnktnn.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163qzoqfvvl.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163jhmojbku.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163aznlzmjc.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163tjjgsqwx.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163xuoaewlz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163mhsicpgu.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163snhkrhuz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163xzwfirqy.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163sjtlrauz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163wuhwghbp.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163fkzlbdpf.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163fehnomkh.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163nbcaejdl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163vgyvwqnw.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163eswecssm.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163iddskfqv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163wbbohfug.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163pzqwpzna.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163ulmgtpgo.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163hbzotpfc.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163kdqgulrs.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163hvypybir.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163vbdtrmxc.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163qdcdmqeg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163wkjqifpf.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163sexdgmrh.html

================================================================================
来源：http://www.xuanzx.com/163bgjliund.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163isjziltf.html

================================================================================
来源：http://www.xuanzx.com/163xfdexwjl.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163dyfbbmjv.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163dsphnehs.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163wvnsorbf.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163lmoddosk.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ajzmjkct.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163npyygypm.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163lweixkbe.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163hmigmpnk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163aqequuyg.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163awejqbgr.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163pjjqcrgg.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163jxaxoyaq.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163xyrqnvly.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163vesffsgh.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163racuinnz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163blslsluz.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163peqyitrn.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163ayprjglt.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163hvllqljs.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ysueknkp.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163efdlrmka.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163zentsnvy.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163xpcelvnp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163kdzebics.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163pxdtovdv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163nuhcnenu.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163mfwpyexk.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163hqyckpmk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ihxprunu.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163gzhmfgmw.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163xbfpibag.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163itwtapfp.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163bpdpjrfu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163gebwovay.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163xnyruxxm.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163qgficpuf.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163nutibivp.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163avhxlpib.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163hozhmfjx.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ogtrvsze.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ejixsvta.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163iebpdpzf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163ibwvgqve.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163hquyaxim.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163ctwfkgml.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163solflngp.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163ktqlkjxz.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163mctmfslj.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163gymtsnmn.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163uqbszieu.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163abyzskrw.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163itdbqwvy.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163ftihxutw.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163rmdtvrls.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163cyzoywkf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163dukizzda.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163yiymzave.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163qusqhjil.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163lxqoxzfs.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163dbrkjnhv.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163vwklfoqy.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163vwrminvm.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163wnokirwe.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163tlmugfba.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163zsnszzsy.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163dbtmfugf.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163zuimkcfu.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163zxsnckoi.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163hdoxgkes.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163nlsynydj.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163wbfmvlsn.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163whrvtmjs.html

================================================================================
来源：http://www.aibaodan.cn/163eohiulix.html


<!-- 参考信息 -->