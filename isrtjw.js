外链999!wailian999！

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163udjtyoqn.html

Py:   len(s)
来源：http://www.aibaodan.cn/163yvadrzti.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163axvpgemj.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163abxjlwbt.html

TS:   s.length
来源：http://www.aibaodan.cn/163tvjqwwdl.html

Java: s.length()
来源：http://www.xuanzx.com/163juihcpij.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163ryzdmbsk.html

Ruby: s.length
来源：http://www.sxryk.cn/163lrndcost.html

C#:   s.Length
来源：http://www.xuanzx.com/163cslnsidt.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163ftgcdxze.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163dihsrdde.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163xhcntdtu.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163kpzmpfwr.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163kbsvstqh.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163kccshhpw.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163edkidevy.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163bbounrrs.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163hohtnwbj.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163wbxlopfh.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163uxylyohj.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163pvjswewx.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163daaoehfw.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163pujjamve.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163swmgwmil.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163mmvxzora.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163vllzbyla.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163bxyutwlf.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163xdcbuiav.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163cdkkmemg.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163ntipqnsq.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163eyartpjr.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163okjmgxaa.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163nfinlgsu.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163dvaudwtj.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163beemcjmz.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163nawfczpe.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163igqpahta.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163ornyafvu.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163jptbeecp.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163faluufme.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163ipezlnml.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163llrmryvt.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163wcyjafjy.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163ajivjdyp.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163tmjijrkm.html

================================================================================
来源：http://www.sxryk.cn/163djnzqqwg.html

B. 流程控制
来源：http://www.xuanzx.com/163iukzhxul.html

================================================================================
来源：http://www.sxryk.cn/163ywjkaepo.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163yozqijnk.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163bpnlobkw.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163xhkrcakw.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xgdyfnsh.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163yzqutkls.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163uwgaazzu.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163sbmufzfs.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163qznnyyit.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163saazfyna.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163lwpiicao.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163lmpgsrkk.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163hpvtcllo.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ytqwkttz.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163tuwpuhjw.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163wiydhevs.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163hnvtkpqb.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163symdnttw.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163nigfjlbg.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163nbatzwkx.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163lhuosddt.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163vdzpolra.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163aprigonj.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163iicacmng.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163qdzuiofo.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163jsvvzsng.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163kgackbrt.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163ikgyunar.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163tsqejgas.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163fhkqqudk.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163nhtbxujh.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163drxeivlp.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163fybgelnp.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163xmxjpnzh.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163joiebkyy.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163qkrjgxhv.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163llxyeygd.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163oorrkkjn.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163xbvdvcmx.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163uddjnyfc.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163dpngukqw.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163vtmvktgk.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163vcgxkrcu.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163zadasuax.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163cerumqgi.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163kffrnkqu.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163qopmrjuu.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163micarkqa.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163qbydalzv.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163qgbrvlqs.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163iatxwgca.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163lbwhcdnl.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163vkgzvliv.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163qrkcwdiu.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163yzctfcli.html

[B07] while 循环
来源：http://www.aibaodan.cn/163tsqnaouq.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163mocaasmd.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163byyegapv.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rbnhxjpt.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163naszocvc.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ftrqcjze.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163biriovdk.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163fpujocho.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wmooiwlp.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163ibwkogzc.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163jdtwencf.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163lqyjjwbz.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163kpntrxgh.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mqztvyhd.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163brcvvyts.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163xtmsqlam.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163recknlcj.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zgvwktvz.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163uvucpgjc.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163lyqigsuq.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163nynvcise.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163vpdxsmem.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qmmxkxjq.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163urtqcvfd.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163awdcqjou.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163bzjaxbza.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gcjwgsci.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163yejrjmmt.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163fuofsksg.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163ofwakkza.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163slzdumkr.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163ytfmwwrl.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163xyofxnac.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163gxsiyaem.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163usyzkdea.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163dyikqvsb.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163zxzwsnrh.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163nssjariq.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163kofurdsy.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163okpqlxaq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163cksbwhxn.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163fqpuqkpx.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163bkadfqpz.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163ljokljgg.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163enmrrzvo.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163alkvxdzg.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163hxreamqe.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163ubqherpv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163fybqhglc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163srpoclqm.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163zcrxwvju.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163gzsvdoca.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ugkaafgi.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163qqjeafov.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163ryaiyuvc.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163emtxncbg.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163tymijyvr.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163jftuqito.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163drgexhjt.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163yrspogmw.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163qgapenyf.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163nykguonr.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163zozuiqrm.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163vhcxzimr.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163saorxqtl.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163sbesdtnu.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163rhdzipyg.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163djrxsqrp.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163ysbmjnal.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163hzrgtabs.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ysrzciuv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163pgyqbgoz.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163kbpoicea.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163jqrrvkdk.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163pkkvkvno.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163knxogxdk.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163ximeazhm.html

Java: a && b || !c
来源：http://www.sxryk.cn/163eojwruqm.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163zotyupkn.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163smctyawm.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163yvjgtxkj.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163uwqcjgyj.html

Py:   if not data: return
来源：http://www.sxryk.cn/163ohlrpsyb.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163mhbmrbud.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163uzitwccv.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163wzyxypld.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163wciyegru.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163lvfmsnbd.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163obimmarw.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ldlzvbvi.html

================================================================================
来源：http://www.sxryk.cn/163ypzadnel.html

C. 函数与作用域
来源：http://www.xuanzx.com/163psqikeku.html

================================================================================
来源：http://www.sxryk.cn/163ceqnzusm.html

[C01] 定义函数
来源：http://www.xuanzx.com/163zhhpeszh.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163qfjookgu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163uvqizdqn.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163vgbkveye.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163jlkptmpx.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163kqpjcand.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163rcgawwii.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163zmxklrpp.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163vevnnpny.html

[C02] 默认参数
来源：http://www.sxryk.cn/163lvmtcmnr.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163fldrbehq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163vxoybqzw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163lotlgzkx.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163nocjbzsl.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163tspurxyn.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163krgarace.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163rfskbchp.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163ucmfheav.html

[C03] 可变参数
来源：http://www.xuanzx.com/163svtxzrbu.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163bupjrijs.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163dmghevln.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163emsijskh.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163bqsogvwf.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163qkrystjf.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163xasyjkdg.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163isluakdf.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163besrnond.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163wtvsjwrj.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163lqyqlxqo.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163girzyqus.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ordtlqwd.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163vfrgvayk.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163dbkvqapr.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163thtqumlc.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xrhsbfpu.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163whlcwzao.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163frusjgmk.html

Py:   return a, b
来源：http://www.sxryk.cn/163qtyhjfhy.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163nrontfgh.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163lqbnvbqr.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163voqpfjmw.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163xskjwjcc.html

Go:   return a, b
来源：http://www.xuanzx.com/163umvptsfw.html

Ruby: return a, b
来源：http://www.sxryk.cn/163bucsuqvg.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163mpeshwxp.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163hxdurhvx.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163mkijotgz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163xmfawvtz.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163chdrbzes.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163szdiaswt.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163jfpwerdo.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163moldqvpt.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163xfkeiyud.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163ewckxnmn.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ufbubufe.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163obyrtuil.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163jjekrjrz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163tgocsqcc.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163yhraottl.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163pvwkmkun.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163gnujamfp.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163egunqnya.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163zghfawqx.html

[C08] 闭包
来源：http://www.aibaodan.cn/163vesksder.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163axshghoc.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163unvospnq.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163yhyptgoc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ginxwwak.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163iqtimumg.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163edxrtusi.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163szzecvev.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vfsrzzub.html

[C09] 递归
来源：http://www.aibaodan.cn/163jnwcxydc.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163vfvezfyd.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163cuvwfdnk.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163tarvzxmx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163vkozvoxy.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163sbtfrcgr.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163vmmqzztm.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163tpouwjvq.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163otdsylkl.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163smuhntng.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163ssrldfpa.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163cvrqklym.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163vzebhltk.html

TS:   同 JS
来源：http://www.sxryk.cn/163deshkqxd.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163vbyxzgtr.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163ajcpocew.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163qzdnihjz.html

C#:   块级作用域
来源：http://www.sxryk.cn/163xduxrtsa.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163gudxsozz.html

Py:   from module import func
来源：http://www.xuanzx.com/163wtjqlmlq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163okpmqouo.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163yzfgeubd.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163ruljbfcj.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163wcqiqyih.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163fmfkvxvm.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163ejihjbxv.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163gvtvnybw.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163znmmepgf.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163fvwrnrmr.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163hsperucr.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ketjfdbb.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163hhzbqpdn.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163hjhlkjuf.html


<!-- 参考信息 -->