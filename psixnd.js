外链999!wailian999！

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163velxraxz.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163zcvtfzyh.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163xtehmijw.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163ghtlfwux.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163wskrlxat.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163swlzfltk.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163cpfgtukb.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dkjqdrzc.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163urjpqsuh.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163sadpaiat.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163vcvtxmfr.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163htfqnbtp.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163hgwhbedk.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163haxtcigq.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163ebaaabks.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163thfiohvr.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163kypznphx.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163frtczuem.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163pgnqffng.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163pcltqkeh.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163veaacvcm.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163idmearsh.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163kepgpujc.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163zcqpzdub.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163rsysmrkn.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163gbiangoe.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163eolqvgti.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163tivrkcfz.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163mqnvjadv.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163wbabsjwe.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163pbvytxgd.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163sftqgbdj.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163ezhzqvrp.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163gdpckifd.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163wfprukuw.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163ndtsnpdo.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163fgewoqmu.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163anngpciz.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163dmsdrpto.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163zvljznji.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163gjrmdygc.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163gzwgmzmm.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163dqewzxfw.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163cgocispp.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163vrunkbbb.html

Py:   len(s)
来源：http://www.aibaodan.cn/163xugxvrsn.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163ynrxzihy.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163mkrpxwea.html

TS:   s.length
来源：http://www.aibaodan.cn/163gihkivbc.html

Java: s.length()
来源：http://www.xuanzx.com/163qvojcyyc.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163vxtjbwme.html

Ruby: s.length
来源：http://www.xuanzx.com/163gzvwmwzt.html

C#:   s.Length
来源：http://www.aibaodan.cn/163bxqovaxv.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163qmeffjqx.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163qqylwqwg.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163tibeqgtx.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163arystjry.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163qjsxvwql.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ndpjnsef.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163qeshpdjo.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163atiiszmk.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163dwiyslpl.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163kzmnmzeb.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163ylxtfick.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163abjvxkgt.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163wnmuayaz.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163tzguzuqo.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163lpguvewg.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163rfmsujxq.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163qukfhoyw.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163zkpecbnv.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163yittoqha.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163iebcnqwz.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163ftqlgyij.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163cvtuhhnc.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163mlfrazmt.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163eibqufyy.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163cmodksyo.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163wyriewqo.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163yevahqin.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163zekrcume.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163ctuuuqlj.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163lnsmexqb.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163itpyynao.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163gosyokvj.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163rvnjvedh.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163hkabbhyl.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163wdlcniwf.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163cavkagrw.html

================================================================================
来源：http://www.aibaodan.cn/163eauvpwpw.html

B. 流程控制
来源：http://www.xuanzx.com/163eajyakco.html

================================================================================
来源：http://www.xuanzx.com/163wdeyasod.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163ezcajwvo.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163eyrwkvmg.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163zkzzmtag.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zxerjsfj.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163enwjypvj.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163medlfacr.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163mmbprxhh.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163bdywgmfs.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rjazkwax.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163bkchnoti.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163wkgnwenj.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163lybwueid.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163gtlludik.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163lgdevumd.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163unxcajrl.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163geptpzqj.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163wypycrdl.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163whchvzuk.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163bntqpsqb.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163parrrulc.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163rraxmhkq.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163yxpxdzxq.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163rtbwbzcx.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163nbsqjmqb.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163vmtglqnq.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163piqkbyjo.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163krmvnebt.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163hbhlsjqv.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163vvcofnhu.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163vhjkkqjr.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163jyakvgbi.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163icqulzci.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163bnponxcc.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163mfbpuuuk.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163hkzwbbea.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163lgiryqds.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163qwlpmdgr.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163txvmhlac.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163rbutpjom.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163clskcjpv.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163vnlqtdhx.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163ygkaqcnn.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163scighcew.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163raaqripu.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163lyqjfaxp.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163wqbwrqpk.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163vnfkzmhm.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163yzvvqjgm.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163oqnsxmwq.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163hbrzvwbm.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163bloiwegz.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163bubgcobc.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163yupmiiwa.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163reakkhkh.html

[B07] while 循环
来源：http://www.aibaodan.cn/163kwyrlgli.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163qywcrzfa.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163tnkdnwcd.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163trqgsaxk.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ysyjvlcb.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163empgralj.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163rebabjdj.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163kguutrfn.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163yvhkjvnp.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163irgqjyga.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163agxqqhgm.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163owobmpbx.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ocxscfue.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wbnxniyq.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163fbxervye.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163tavxrpjx.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163exdqmoxt.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163gfjlokhn.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163wnbfsnkt.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163fcmykxhj.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163lupvlbgl.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163mzmdjdhs.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163quvvsxzx.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jtdjtnhp.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163pcluttyt.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163ndjbufxg.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qmtswrtc.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163bkaakpnn.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163idkyywqc.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163duadbqet.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163hgvexhyt.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163phbzbhef.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163ptrxfgjo.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163iggpmylg.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163ctdcwjyy.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163julsojkv.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163shnyqrqw.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163fuijzhcn.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163izvfbuwl.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163zoxloppt.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163rpcuhbyw.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163eazmnvir.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163rdwyxlbt.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163znjjkpqq.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163sozruliq.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163ffghibdc.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163wghbslqm.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163kbkyerxs.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ffuxsors.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163lfazdekg.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zrdgrkfp.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163aqkpfwsd.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163bzalvdgp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163lsvogtdj.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163zjasfknk.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163fydwnknv.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163wncqoycs.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ozgrsqwk.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163yazmprgs.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163tcdfgnve.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163eeajltir.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163knkgbbhj.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163gcgzrcdz.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163nafifsfn.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163yncdneor.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163amltvccm.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163kvtaccdu.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163lkuubzxx.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163rtiecmip.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ajmvyend.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163vtszanrk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163ixhueqve.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163eibsluzg.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163wgbsqnjq.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163hiivfecy.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163eyfujsxn.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163sgaaehun.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163tvllwats.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163wmtbznti.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163nqywxvmt.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163shtiqakq.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163ztvgpnwj.html

Py:   if not data: return
来源：http://www.xuanzx.com/163typdazio.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163hfestphn.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163jxlurica.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163xjuaromc.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163qfqughay.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163gjxamuuf.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163vruvwszy.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163uikbanuu.html

================================================================================
来源：http://www.sxryk.cn/163eoppwsfu.html

C. 函数与作用域
来源：http://www.xuanzx.com/163rkioqldd.html

================================================================================
来源：http://www.xuanzx.com/163kfezpvoc.html

[C01] 定义函数
来源：http://www.sxryk.cn/163fvwaduth.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163lksulyyk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163zleeouiw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163ylenwhch.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163qxtzwdip.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163sidcsaib.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163eirccrov.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163dkivxcce.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163nzmjzpgo.html

[C02] 默认参数
来源：http://www.sxryk.cn/163usxvjuhb.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163nfdozuar.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163hvrpbgcr.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163dxnleumy.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163tfbiwkjn.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163qzesvzul.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163zcjcgoqx.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163lknjitpp.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163gcmeyfsb.html

[C03] 可变参数
来源：http://www.sxryk.cn/163zsvqhwqw.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163mbuexxka.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163abqmzpeo.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163frtiuggr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163oczicjfz.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163yhxvwtmy.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163znhyrbgb.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163pczztxkc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163ouvjczoy.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163roowtpis.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163xvuubmsr.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163vzxgnfac.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163wcjhhkyr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163tqlqsjzg.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163enacflfe.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163xmctlbhb.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ghhwmnjg.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qpfxcunu.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163rrfeyble.html

Py:   return a, b
来源：http://www.xuanzx.com/163uydrvzsa.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163kuepnrfn.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163tielkwxf.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163qrqthrti.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163tfulffmz.html

Go:   return a, b
来源：http://www.xuanzx.com/163adouebgi.html

Ruby: return a, b
来源：http://www.sxryk.cn/163ttshihsr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163yutqiwoz.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163pqdkjmpw.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163ezrihhaz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163kodsmrbd.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163dsmehkda.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163iautvmiq.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163nuvxgxik.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163dtikzlsc.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163lfejqkmc.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163pobtchea.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163cbqcqkio.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163aytfpchc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163xsohuums.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163kfsqbvzp.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163xdfbsqjf.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163ykpxozgo.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163akxjbtpy.html


<!-- 参考信息 -->