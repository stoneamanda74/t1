外链999!wailian999！

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163qwwhevjd.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163wpopaqzt.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zbsucbsk.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163lslrpuav.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163vibnhkyv.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163xagpnymt.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163tkyvegto.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163jhdiigki.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163bwjvhxfu.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163wziogwsd.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163jwmfiayp.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163xzenzfdg.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163qlxlxqmu.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163yxcdjqmr.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163bnnounvg.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163fbkiovdo.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163zmtklexl.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163aifkkhkv.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163esxiqjks.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163equpepto.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163knseywtb.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163swnlwckx.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163asfvqtww.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163likafgou.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163xrokdchy.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163gssdspqa.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163uhgeambt.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163pbppadmk.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163tlkgatjb.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163dboxwgmd.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163goletagz.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163slbcyblt.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163osxclpgm.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163irhmvqpq.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163bsfthukg.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163gphumcff.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163fcyrhosf.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163lmpodzmo.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163wsmxwqys.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163gfiwdjtt.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163wbsrgfzm.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163vnacupno.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163kkivgvxp.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163aibnzmil.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163nwpuzyvr.html

Py:   len(s)
来源：http://www.sxryk.cn/163mejyxzac.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163qqjkzqjb.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163cqatoync.html

TS:   s.length
来源：http://www.sxryk.cn/163dwivjkpe.html

Java: s.length()
来源：http://www.sxryk.cn/163nplyzkbg.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163tebyisft.html

Ruby: s.length
来源：http://www.xuanzx.com/163somiepri.html

C#:   s.Length
来源：http://www.sxryk.cn/163btdxdmqi.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163ievykhau.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163rjfkhdzr.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163ogxzdlsn.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ueqgizqp.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163pvtgrlma.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ckfyjyno.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163rkffrpmd.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163rowdbadc.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163rodlspdg.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163ftcpidjr.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163nwkdiufi.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163pvvncaew.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163xnadtzfe.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163awjfbpzd.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163kkqrwexj.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163tgcwbzqe.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163rrzyvkke.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163bjxxfrfk.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163sstgolqw.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163zfpgzako.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163mzlmfeed.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163asaqjvlo.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163hnxilanx.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163okfnriog.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163cnqotppi.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163qdpusubr.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163nbfgdvyv.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163qckucxcr.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163qfdnbshc.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163sghaqtuy.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163jvcmwxvr.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163gilvnlnu.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163cikwoapw.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163khdpuqnz.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163peesbzea.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163urgiixhm.html

================================================================================
来源：http://www.aibaodan.cn/163soyuwevr.html

B. 流程控制
来源：http://www.xuanzx.com/163lvlgfuhg.html

================================================================================
来源：http://www.aibaodan.cn/163unzqtbit.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163ngzvfatv.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163htzrmdse.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163vetffoww.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163qwqikhgr.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163pmjanlex.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163tvhltgmh.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163ajbiuccy.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163qdnmnhnp.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zbgajqtf.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163xtjcgmqh.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163xtrfxcdt.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163wffxcecw.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163nokthkym.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163vyzdiwml.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163qgorfbye.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163bclmhlsd.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163dxaaqeby.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hixnzkqw.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163zyzyrded.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163qloqrqij.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163zazxwuhq.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ryathrys.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163bmfrvovw.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163emunuxji.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163luepeqao.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163linpixry.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163harlmvfq.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163lyyutlhl.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163ugazankr.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163zkfphouj.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163nbiqsiwc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163xvqbacqg.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163lrfzvwul.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163yelmjbib.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163ilpgoulx.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163dkgubygc.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163zfrpezwx.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163jckkxhvd.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163hwtxvtre.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163gestjjak.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163bbcwcfek.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163mnovkgen.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163nmzomnkg.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163tgyqmtlk.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163klsziwis.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163gesvmfme.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163sienrlkf.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163dpqazmqt.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163pexchkmv.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163yqeikgwh.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163ogdhrpvd.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163xnzlveom.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163lbmabiii.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163thkykwmg.html

[B07] while 循环
来源：http://www.aibaodan.cn/163zomimuuv.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163rvggrrpu.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163odndkppu.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qomklbrt.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lgjnnior.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163dkrvmqyp.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163kqzopjte.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163zpenyyrz.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163xyuxoxhg.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163mqzzybhg.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163gavjnbtn.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163gjegthzs.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wppqduxb.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ngvggsff.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mpjdbjna.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163ucjbxrdg.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163kwqrfodn.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ujiqrluc.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163fdokxhrd.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163nbchuiau.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163waghsutd.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163vljblfip.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163rfiqulek.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163fwkfakht.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163wuzfxqoo.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163fhmkbdvi.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163vdpisjoe.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163mtzixcun.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163rkhnkath.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163ifpryhlq.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ivayjxgk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163pnumbblr.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163nrhakoon.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163ywgfnmue.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163zwjrkiwj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163wwpdbpop.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163ubaojkbc.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163eszxiaui.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163devqqhhu.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ucaypvjj.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163wuoduadb.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163vkmpeucn.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163nfvpkwwi.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163qdmdouyv.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163mpoqxtfn.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163xojotbmp.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163jjcofevl.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163bruqeufd.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163dpadebyw.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qsbnfgdw.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163coqoufub.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163ochvbgud.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163lsiyqeea.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163gxdpnmss.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163bqvpahsv.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163fgpaeotf.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163xyiqhfqr.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ptbsisgm.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163lhmqlptr.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163pjevbosv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163njmjhaur.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163vpywwnnv.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163fmgfoiim.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163gwchwsfu.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163jwivaywg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163qrwrlcgj.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163wemaknoe.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163jlrpeswy.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163fhgxkcdv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163xprlkfit.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163nmooaaxw.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163hdueugjl.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163iozoubpg.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163brhswfjm.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163uwyclzsb.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163slcxnhke.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163jnzwocod.html

Java: a && b || !c
来源：http://www.sxryk.cn/163lkdonbkc.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163fqkxbcbh.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163toavjwpi.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163situhxzu.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163cakkdyyw.html

Py:   if not data: return
来源：http://www.sxryk.cn/163nycodipc.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163oiknuvun.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163bsooiusk.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163gzgilbni.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163xzgexvja.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ajxbqsie.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163nwrjvdid.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163gdefakal.html

================================================================================
来源：http://www.xuanzx.com/163rycarogq.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163igcpunuy.html

================================================================================
来源：http://www.sxryk.cn/163ibfsdoep.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163uknlcdsk.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163pblrqnkg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163fnzqpzen.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ndorhive.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163xmyhcsch.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163bgdyyfvk.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ucmthuhe.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163ocwotfnu.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163onphpcob.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163rsqqzeio.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163myfmvdov.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163unlpsmxr.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163zcxsyzye.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163wrgdeyyl.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163gmhqrsht.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163unsxkxyc.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163qlxejinc.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163itpizrys.html

[C03] 可变参数
来源：http://www.xuanzx.com/163uewzknpr.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163jjfxamed.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163rxqzgsnt.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163oqxtypzz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163goxungfx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163dvjvizpo.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163jxizamac.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163pvdzfrss.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163itkalotp.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163xtmtrxyo.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163qpyexhjj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163hsiygoon.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163qkipqwru.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163jbcckiwj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163fkgfabqv.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163fxlslvhr.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ppzcuqbl.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163rzhruydb.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163qfqfdfst.html

Py:   return a, b
来源：http://www.sxryk.cn/163ulwjgohs.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163eqelntpb.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163saimjynr.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163bjoosomv.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163rybbcaqk.html

Go:   return a, b
来源：http://www.xuanzx.com/163bougamwz.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163xujeudpw.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163gtjfxhee.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163eooeyunt.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163evkuqrwg.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163agjjfurw.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163ctpjpoll.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163sdgjznha.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ccwmytor.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163kbtljsms.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163rmfxzfek.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163lpbszjgk.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163jwqnebrm.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ddyuzhlh.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163bixhyxhf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163lsavrdez.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163cxaaguaq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163dprgwdbo.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163jeqzduhh.html


<!-- 参考信息 -->