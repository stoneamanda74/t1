外链999!wailian999！

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ofjqtmfi.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163fwsxbxdi.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jhezzfny.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163zmzqwooi.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163wucjxhxd.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jrnrwjvf.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163rerfhzhq.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163hnkcadmo.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163xysearrp.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163bmfzciyv.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163xxxdstey.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163xwaffneq.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163sxbeokfz.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163yjqgtfdx.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163wlqrdbpl.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163bffkrhas.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163tkpelhjh.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163tuezlhwd.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163cialgvxi.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163hsgsbaic.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163mnhfsvsx.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163vjeqhsrq.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163axxtlhjo.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163ccomjvvo.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163vdhweipk.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163zqimwwqw.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163zrmtuass.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163pulvosfj.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163auagagws.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163hvtnsksr.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163gncllkcz.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163nmgtmcja.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163uqhhsitf.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163iyqeirrg.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163hnxhzvts.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163kvlfimnv.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163yfmakswd.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163gntbztre.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163gisaolmt.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163llkjqcfk.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163yjmzrbhx.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ndahhvuo.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163wmukdpnj.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163iaiwajrk.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163eyccyldn.html

Py:   len(s)
来源：http://www.aibaodan.cn/163fazhcruz.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163otpehzav.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163maymusuh.html

TS:   s.length
来源：http://www.xuanzx.com/163ssuhvvup.html

Java: s.length()
来源：http://www.xuanzx.com/163vpvrrxkp.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163siuxhidk.html

Ruby: s.length
来源：http://www.xuanzx.com/163cumoeqbp.html

C#:   s.Length
来源：http://www.sxryk.cn/163umngmtli.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163skqcpath.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163etlzxaxx.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163gqfqgdjq.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163aahtipgn.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163fxqbviui.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163grvkoduf.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163qwftgkho.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163qmiyrcez.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163qczzdeqw.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163pzyiqtnv.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163ohryppsp.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163bovcknkx.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163dksshmjw.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163tvrexdgd.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163qcqqpmzp.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163xrcymyiq.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163vkiwyroa.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163tsltchax.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163sznldqsm.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163qxayhdto.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163sixhnoyu.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163mtlmmldn.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163zgvpyhak.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163snsscvcb.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163csaipfgb.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163bezjknpt.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163wnzkwuyl.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163snbdgbtb.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163gobiopkh.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163iywykplp.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163eqlsenzc.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163vjkqvoey.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163nndjltcc.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163rjyxlsvb.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163lkgsybpa.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163cxrmdnyr.html

================================================================================
来源：http://www.aibaodan.cn/163lufcwvdf.html

B. 流程控制
来源：http://www.xuanzx.com/163hikupome.html

================================================================================
来源：http://www.xuanzx.com/163znaulrgp.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163mwdblijz.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163nbphenxj.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163azxitlwp.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163gqpdlzqy.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163xvlbpmrh.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ieslywcp.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163tlzscsvl.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163aezbaxod.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163iakmvhvi.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163jxjyodcm.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163teuolvfc.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163wyovlkjr.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163tkchgjhc.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163mdumvxdv.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163wxaoeaqu.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163dkpqhpqs.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163joyzmwav.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163htncwnvo.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163krucmgzc.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163awibqjxf.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163vfwsjsnz.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163nuiuavel.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163zdyoqkkr.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163tskxwjag.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163becogxrw.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163wjzivuim.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163ywtgyqme.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163gbtidrgs.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163ulhvxtxv.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163dicpluyl.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ufnvmhpo.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163fqscftsf.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163chirplno.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163ilbymxan.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163wvlqotyt.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163prifqxrn.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163segnfpcp.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163yugdfrbc.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163gxqpctsc.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163lyhrredg.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163olhgkqup.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163iladmuhj.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163gxyaqaxf.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163hayzhcfo.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163atnetuum.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163vidurkrx.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163lxkeeqlu.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163aoahetzy.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163gejfuocw.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163rbxgnafh.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163ywgyjmkg.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163fxpdddkl.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163gvjpuuia.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163uvuhhxlc.html

[B07] while 循环
来源：http://www.aibaodan.cn/163wxtwasuu.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163gfklpyay.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163kwjkjbmh.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163fdacxcfm.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ddaqgzev.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jrxbhoyo.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163zihftxbs.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163omgjztfn.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163koqyeukq.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163mykkyilk.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163uvpxfcsc.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163uqrmrezx.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163kshijlfi.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wzweldfc.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vzeuyckl.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163pvpxzwkr.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163pudomirg.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163lvrnsohy.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163jcpfoiug.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163kwqrdjjx.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163ecewdhns.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163gddvagfo.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163algfipxs.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163lnxiziou.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163icfwpeba.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163iyybxhwh.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dmqmkrvh.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163ewwkfqsr.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163bvsvbpmq.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163qwtkyehg.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163ajgdnhau.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163rjqxmtlm.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163wuqyyuev.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163ujfbswvl.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163sqscexgf.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163uwthdyla.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163vkeeidut.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163qcejzvxq.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163nwozdpua.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163xedwwaat.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ocftdthq.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163fwbsbmuu.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163xrpgphdl.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163olldfvku.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163axetatex.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163sreoiscn.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163kzbfpwna.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163uchykfqw.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163wilipige.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tcihfjwj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163gubmyzzp.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163rrsxfguz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163hzdduyuc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163umrihndd.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163xcmswwki.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163xnrgbdzt.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163nnfilpvd.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163vdgoxjbd.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163yhonahla.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163oreqdvty.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163mmkcwiko.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163jfanynrl.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163cyqttpgj.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163kudzvokh.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163irtyeetq.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163nccybmmk.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163kpnzvhpz.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163vknnkezw.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163nglwdxuk.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163thgauxoi.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163uurdnabf.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163jmwhizhe.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163fmwemqal.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163kgsjyync.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163onrgeqkb.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163qbddtkwk.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163zgkwhhii.html

Java: a && b || !c
来源：http://www.xuanzx.com/163uqdvccte.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163peornwau.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163upbbpdyz.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163ydwlrnnr.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163dpqjnnqg.html

Py:   if not data: return
来源：http://www.xuanzx.com/163nfwugmmv.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163itfaauzf.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163gpbiqnte.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163bjljosfv.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163chfedifb.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163yfhnangx.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163psylbctr.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163drhzjbap.html

================================================================================
来源：http://www.aibaodan.cn/163kmbffxil.html

C. 函数与作用域
来源：http://www.sxryk.cn/163ifduychn.html

================================================================================
来源：http://www.aibaodan.cn/163wekdgddm.html

[C01] 定义函数
来源：http://www.xuanzx.com/163ttrdeqlu.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163mwutltub.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163euebhuft.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163iwxshhix.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163sxppenyh.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pazpqpse.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163nplwczhg.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163wowwbelv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ykbnfszi.html

[C02] 默认参数
来源：http://www.sxryk.cn/163frgnmbrb.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163qyfgxamo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163bxyutput.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163kgnyiehc.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163vlzjwuel.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163visslgmi.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163gzxshdbv.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163slaaryiu.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163zkdsocsp.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163fivsxcza.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163rwsvgfzl.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163hgvdvgbw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163bqpxpewd.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163pjxelryr.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163gikadndb.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163wbkmkvqa.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163fdcqajkz.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163qkysuzmd.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163mjoqfdqk.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163wkubdlej.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163tumwwtkt.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ryzsszgi.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163drxebeah.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163bquutbzp.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163qobxnrwu.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163wxrzfkcg.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163tlbiufue.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163yvnemqua.html

Py:   return a, b
来源：http://www.aibaodan.cn/163kmxmapvr.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163yyodnpvn.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163ciruqcos.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163zmctbqdo.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163kldsitch.html

Go:   return a, b
来源：http://www.aibaodan.cn/163rysfjtuj.html

Ruby: return a, b
来源：http://www.sxryk.cn/163ozcfmadj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163rqeejadc.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163ohnmkaru.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163nuaudqku.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163efvnyyjc.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163edanzwyd.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163jnxhunqx.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163cfcxerpi.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163vewcbhkr.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163xwqxcrjq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ubjhqcof.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163bzvownod.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163wpsvvxix.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163krvmsfor.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163hjqaguxb.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ekypgowc.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163yzqondxw.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163vayjwwuu.html


<!-- 参考信息 -->