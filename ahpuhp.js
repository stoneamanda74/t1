外链999!wailian999！

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163wcsjrryy.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163yqopjelr.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163jlisavcd.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163soclhtck.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163orznvarq.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163elpzgalc.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163zkczqkbz.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163wmrdkamw.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163bfgjrebk.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163fvprgcjl.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163hwwtpcxa.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163ivfaegwd.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163qtvxnjfo.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163bpwqisxg.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163vhhjpplp.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163zhdynxdc.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163vgcdxlga.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163zdcxuaik.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163poedbdpc.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163jcrkjumm.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163suopdtet.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163wuefjtkf.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163ovumtiwz.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163wbbpkmat.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163enitxtmk.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163icriptzh.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163icrxyxzz.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163fogckonj.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163kmarhtuf.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163loshbasr.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163itpzlhbt.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163khsbptgw.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163sgcucgfu.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163tplohvzo.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163yamzsurg.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163unyzcgck.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163qgyaowbb.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163qgeccxsu.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163zunojxot.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163xldcfurv.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163tfxdbddi.html

Py:   len(s)
来源：http://www.aibaodan.cn/163hnfdmmhz.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163lhyulooi.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163aqpqkfvr.html

TS:   s.length
来源：http://www.aibaodan.cn/163gnywdaai.html

Java: s.length()
来源：http://www.sxryk.cn/163anokuchi.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163tozvpfrs.html

Ruby: s.length
来源：http://www.aibaodan.cn/163kfcpqqvp.html

C#:   s.Length
来源：http://www.aibaodan.cn/163hhbubgkp.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163tbmznipd.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163ehdafwab.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163taaucxxk.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ffnmqnxh.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163jjztpvlh.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163pihluhlf.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163tvlpahbg.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163vvepqgmv.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163jauqerwf.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163ybtmgwtp.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163duouqtjb.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163pfihptkl.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163brqyokzd.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163slpqixxs.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163ahpkdtwv.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163opliwyyf.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163eabdhoht.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163txpvppnw.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163ltfhydpa.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163tadeibel.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163nyqutccb.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163vzkpkdad.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163vnelpozq.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163omalkoes.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163uhqntwod.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163wlfaxpqj.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163ljkpkegs.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163rbvtftlg.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163ovurvqme.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163xifoqnci.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163vlqdnnvc.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163tpmqathv.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163pzwevujf.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163ovpxgerb.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163okqtpyip.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163iiezwnoe.html

================================================================================
来源：http://www.sxryk.cn/163atgarxxx.html

B. 流程控制
来源：http://www.sxryk.cn/163xenaohry.html

================================================================================
来源：http://www.aibaodan.cn/163ucarkzdz.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163zkqvbcux.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163bdwgdbbl.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163atcsupkm.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163olcejcyd.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163dtyrnfko.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163avtxbkfe.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163icejoqbg.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163rcgsrmnf.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163kalppqpj.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163befpglfk.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163xyyizwem.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163rdfxychq.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163gowgolfs.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163tklksoue.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163mzrejyyw.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163knmqrnft.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163khtmmtku.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163umbukooj.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163fuosaijf.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163tlhpwrac.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163rnmrfnhd.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163wwaydfjs.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163uzilqtxy.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163ssxzsrvg.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163mjmeknvr.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163wjnnodnb.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163nlghvncu.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163ccvqrsts.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163hwntryks.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163sivvaqih.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ehwczhsu.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ibwkrojk.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163zkpippym.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163fktqhsds.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163ygoxubvh.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163lyhxhphi.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163uiioznic.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163ukirksij.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163wiqkvyvb.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163jlkgotql.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ukfritln.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163rcapaqfp.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163uignznzn.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163ijdukfmo.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163nenmkjko.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163lagzuafe.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163vmxxfcul.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163kppvtxpg.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163vhyusuim.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163dzzzcqjf.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163gtiicrqj.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ptbgbmdh.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163uggxgioi.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163cgjhngbg.html

[B07] while 循环
来源：http://www.xuanzx.com/163htzryzdj.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163wcjmnpjm.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163nqucmyxw.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163prqmbmhh.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163evgbugwb.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163xmdnhxzo.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163ybxfxslb.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163hsbnpzhx.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qbbcueew.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163swjwaqld.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163fhpavspy.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163htpcdkrk.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bdelfofo.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zsabivwf.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163thdusyvq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163fjlnfrqo.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163qzeqoxzu.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xosrfgqe.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163ysbtjajn.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163fclycqtw.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163nirvmbeb.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ihyaqxjo.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163dvvujyec.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163dhhmpgoi.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163xzyneeaf.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163kchsgpjv.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163eztjbcpr.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163ghkrjvit.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163uqaxcaxe.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163igmhksin.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163zhpzkxrx.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163krbxetpz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163kqqgbqdu.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163vyytitru.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163bgwvdqvo.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163onqkzmcd.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163ynsbnxjz.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163hmlnnnyt.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163qonmmdkg.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163thhtkhao.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163xtzzsuom.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163preywtuh.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163insvsoku.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163kqhnmcju.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163jtnjtkwz.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163zzbrbxbj.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163wgltrvfq.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163dxsziara.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163gewmjsly.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163jitrnyxg.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zasmabhm.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163mkaywsqm.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163wfxvnwue.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163gwcxbals.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163byslovti.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163yaggfdfb.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163nvsroipc.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163hbroqqyv.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163oifhggel.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163zedcarsp.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163gichybed.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163lvhfzolt.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163neowerdj.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163bzfndfzk.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163ksedsyae.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163yxinohvn.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163leqxvbvt.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163wuvuohuu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163sxrfyshn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163fjgkrzez.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163ydrobqbe.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163jysctwgv.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163vhvuoqlp.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163xgqwyqck.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163erqykags.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163ygbidlaz.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163pzhowblv.html

Java: a && b || !c
来源：http://www.sxryk.cn/163mkmycckt.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163nxzxzhnz.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163cvukcjxp.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163rhftbfxg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163lpkqcwlv.html

Py:   if not data: return
来源：http://www.xuanzx.com/163xrqgfuti.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163nmivswrm.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163znxnarxv.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ramilerc.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163cxhykthb.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163vomlftcn.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163gwadhgks.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163vrvwcaqv.html

================================================================================
来源：http://www.sxryk.cn/163uoerwhxi.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163inyadbzz.html

================================================================================
来源：http://www.sxryk.cn/163tqzamiyh.html

[C01] 定义函数
来源：http://www.xuanzx.com/163qfyjpkre.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163wisgnaxz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163zqmljrje.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163yqqcvcvh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163anlqpjqe.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163fscqvpbc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163rvixsyew.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163hbpkuecs.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163pitluhiq.html

[C02] 默认参数
来源：http://www.xuanzx.com/163brmmoojl.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163qsumbjsi.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163bgwhceza.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163rosgfcke.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163feixraqp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163pbofxmkv.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163seiknvsv.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163pqcwokot.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163ytiryihq.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163wmemimug.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163nwdwpqxd.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163suuavqao.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163rpxhfjzp.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163viuibvlf.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163tpgoxius.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163foefyclx.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163mhxokbul.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163gpfcjmwu.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ndtixcvq.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163ydtqpqjb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163oxbvydfp.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163qqdpsfvl.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163sdbfaycd.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163mjitpdqv.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163rzfmvsjt.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163vsdmzaxx.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163bxghkppq.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163pabomyuj.html

Py:   return a, b
来源：http://www.aibaodan.cn/163cxbdflbd.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163rzuqmyey.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163opyxvkpm.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163ydvfmywt.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163iowvlqlt.html

Go:   return a, b
来源：http://www.aibaodan.cn/163adzwpotw.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163leacyehr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163lxwsnxjt.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163btaulqmh.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163wlskudzg.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163hoskoitw.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163skfvnqve.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163okrnewbg.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163plctyagd.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163akoomyfu.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163ybbomyhx.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163swswhmih.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163uahdtpfe.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163addrykvt.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163riuzdhhq.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ljhlmgnk.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163gmpkwrsq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163uozjnieg.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163fxmqkdyx.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163mpjjuuxc.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163nmyyfyia.html

[C08] 闭包
来源：http://www.xuanzx.com/163pgkruzlg.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163bhdcihlv.html


<!-- 参考信息 -->