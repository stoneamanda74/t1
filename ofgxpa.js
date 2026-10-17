外链999!wailian999！

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163cxlvwwjh.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163uxslpjpy.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163gvllyzqx.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163rbonqqjp.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163cbjjlgxd.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ynkgqckn.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163lgntgfko.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163tjducdgc.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163snjhaaru.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163dqczinew.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163hhbzyvra.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163distfvar.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163haadpqyy.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163nayzcygy.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163adoxitiq.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163xznngwfv.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163sridjdts.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163lolopcoy.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163dpzuocst.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163kndypqic.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163mxsfawke.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163jiwawaqn.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163dosqzxxm.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163okdqtnsm.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163ftackhnd.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163vpisoyvr.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163dwfkqavo.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163hhiazaow.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163lxqvzpeh.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163jwfgffil.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163wfofednx.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163rbokpkrz.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163inggdyhl.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163ovmyaowf.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163estjaypg.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163jrhhkyoq.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163lwissdxh.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163upmscqgr.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163hsdidegq.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163mwdcmpqb.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ntvlzobb.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163uobirtwz.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163qarcytgp.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163mhebadgl.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163uywcpako.html

Py:   len(s)
来源：http://www.sxryk.cn/163tumghtpv.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163gsleubbc.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163cvgrkwnx.html

TS:   s.length
来源：http://www.sxryk.cn/163rwemftkx.html

Java: s.length()
来源：http://www.xuanzx.com/163horuhmor.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163tagrgqgy.html

Ruby: s.length
来源：http://www.sxryk.cn/163uqmfmyhs.html

C#:   s.Length
来源：http://www.xuanzx.com/163athwziby.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163fabvfibi.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163qwxftagk.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163mhwgawkz.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163wtllaaxe.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163zibfgtkc.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ebxsztko.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163newsycin.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163ffhxffmz.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163yqpnwffg.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163uywumwwm.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163tusvdtyi.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163sdsiwenq.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163wzpqpeqn.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163huiaqurx.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163nwpjufuh.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163nqlbhkum.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163zjwkszgw.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163umritqop.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163iqdwlxgv.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163arpjamog.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163xbcaxfnr.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163fnfpallf.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163lexafjge.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163pklsfdyp.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163upaloqpo.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163slisjfhn.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163ljxnjuvl.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163jvuamddx.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163rwldyilv.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163ykwzuakv.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163jqlzvfrr.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163kbfgcpfp.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163qhdqaagt.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163kjoyeaph.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163hukvjrah.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163ddevbhly.html

================================================================================
来源：http://www.xuanzx.com/163ujeqpoju.html

B. 流程控制
来源：http://www.sxryk.cn/163ldvukumk.html

================================================================================
来源：http://www.aibaodan.cn/163evatjkrg.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163vcstjuxs.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163wpjbagdk.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163feurovgr.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ksjijlao.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wmckjujp.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163jysozpwc.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163hzthlnhc.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163nbrijqjd.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ptkfjffg.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163yyvugoje.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163okmbrnha.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163zicmboom.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ifrxlici.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163xstitsyc.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163lmikuyaf.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163npbegiti.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163iratxtft.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163uimjuuuv.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163zqiohuch.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163xqfzlamp.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163aotpearq.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163twvobzvr.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163gqmtkiud.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163ysoqxzvo.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163nrhqbbtr.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163ccchhhtz.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163hjzwyqns.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163cypigyuf.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163xuvyvrnu.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163ihspkjde.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163gbvjqvvu.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163onghttel.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163aiocogkj.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163xfwoitjv.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163zvkpyqcr.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163espvlxse.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163vbjaxoyn.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163kaqrqfwc.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163ldzydzjv.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163huvuwosd.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163soihbcon.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163kaklzrrl.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163bnvcvwhy.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163ebayppoy.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163bjzmvktp.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163ghdwblvm.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163pbvrpvyj.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163gunzqmho.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163csinucss.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ymyzkskx.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163wyvksfyn.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163ocixfrby.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163botsjnaj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163vvxhbvje.html

[B07] while 循环
来源：http://www.aibaodan.cn/163ejcywizn.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163zyrumftq.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163ldsdlsyc.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zvadyslh.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163dpkhguhy.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163pwrleiyq.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163tpmifzng.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163wghyhuxt.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163bqagtfvm.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163ztbcoefv.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163pfedpsuz.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163zyeffmrp.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163stsyvvif.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fwehfdps.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163eofcqxmb.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163fnoisnqj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163pwusaloq.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163gghpmneu.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163xjwfyvrk.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163hpvqncue.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163eytddcrh.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163lbionhbu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163lqnqgcsi.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163mwjlnfih.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163csathbxm.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163ctwwlcif.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163lfqkybyi.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163tuzynjnu.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163wuslpwyx.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163hafpwpvn.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163lnhihitu.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163nnggaify.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163eqtpxaqn.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163ryxfusrr.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163iqqjvshu.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163lnlftjqg.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163bdcetioc.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163hlnjnsuu.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163lytuqagt.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163lkswykoe.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163szbpgkds.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163suebapcj.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163fmqlgchl.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163rtwmssle.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163myehhbwg.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163jcsoesku.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163sdnqksjz.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163ovzgvunq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163cxnmxdph.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qgfotooq.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163fnfbxvam.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163xjdkhyux.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163hdwnccsc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163undokrwo.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163zivbhkjr.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163wayknrvt.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163gctunfrl.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163vdtorziw.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163luwjmzoc.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163seepnmhz.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163xylmlqie.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163mmbdmwsu.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163ldvjpxlt.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163jsounbrc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163egduxyqr.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163eqbxxria.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163gdppajhp.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ymqnilrn.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163qjzoczpn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ebospsvz.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163oohvgstg.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163bttlmxon.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163sdenyirw.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163mfijcsfn.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163mvujsfrz.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163zwhggusp.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163ebvlwdul.html

Java: a && b || !c
来源：http://www.xuanzx.com/163rowbsbnn.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163jykcbgvo.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163lqmzcisr.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163wrxninpe.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163fohvbpik.html

Py:   if not data: return
来源：http://www.sxryk.cn/163vycsvvzv.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163yssmdeiz.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163jstgoyfe.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163twdxnkml.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163lnufvgec.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ariloahz.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163ymmzhwpe.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163aiqhkmas.html

================================================================================
来源：http://www.xuanzx.com/163hibmtfyt.html

C. 函数与作用域
来源：http://www.xuanzx.com/163jmlvmzdv.html

================================================================================
来源：http://www.aibaodan.cn/163ekfzcmns.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ivtgwywe.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163siyhhkdq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163rfizrpey.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163egzbxwhu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163cutpaomz.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163iazzlbhj.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163qdehlkvq.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163hsnupixj.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163saapzywg.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163kdzhiajs.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ajffgpql.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163rowqgrju.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163tjgoznco.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163mojamyld.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163xydctktz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163amncmxfr.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163vrjudwsd.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163nqrpfryi.html

[C03] 可变参数
来源：http://www.sxryk.cn/163iftnbszp.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163ilmcwjec.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163cztfazjr.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163gkcrmnrt.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163aqrrzrmu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163blfqsgag.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163ymjkpwog.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163dfsadjsv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163mlesbhno.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163purrzkvv.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163igqojzei.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163ibirntlo.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163nlxxctwe.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163zgugmgpj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163ktkkjhjh.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163fixndcjq.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163wefodpps.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163jlbwlpqf.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163uxcqwwwp.html

Py:   return a, b
来源：http://www.sxryk.cn/163fohkmarm.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163gtptufaw.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163susqxytk.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163pabpdwbi.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163bcerhaga.html

Go:   return a, b
来源：http://www.aibaodan.cn/163qghwmhmx.html

Ruby: return a, b
来源：http://www.sxryk.cn/163gdulrmyo.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163tvoqvlsc.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163qttvqgdm.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163qxbwcqqn.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163mxwnbmrn.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163clsbnrjc.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163dntswlrj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163yodpsuyv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163jaleevgh.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163htmqenmy.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163joxvbnun.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163dvthhzgm.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163zzhzokyz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163mraiiekf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163xlmabkza.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ntusfyfh.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163ldghjosd.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163zoyjinyu.html


<!-- 参考信息 -->