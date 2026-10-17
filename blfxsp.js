外链999!wailian999！

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163hntsxkuj.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163lbheenwj.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163jpyqxlsr.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163taiazcfs.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163mrnxmnae.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163whzapjpb.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163vofsodfv.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163usoahnyf.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163vtefnwbu.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163kvdcuqcl.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163kqduysnp.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163lfyagnrt.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163lfzyvghx.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163ayafkjnr.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163utfkstwm.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163npubxhsi.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163gmftbwem.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163ncysmruj.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163lugmsqdx.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163zzosswfh.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163tjdjwyoi.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163musjcwcu.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163toacylkv.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163ixlyssyb.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163jukonhoe.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163cgaprqrr.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163mtdvpmjg.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163rsbdriuw.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163ilpjvcwp.html

================================================================================
来源：http://www.sxryk.cn/163ziuoaamu.html

B. 流程控制
来源：http://www.xuanzx.com/163dycprhbe.html

================================================================================
来源：http://www.xuanzx.com/163swsdhdwk.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163ibflwgmn.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163xvhivbyu.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163xjbotlit.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163caozveif.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163nijktxoc.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xoyoguns.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163cyckzmtj.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163qgerptbp.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163jesqurdd.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163jvfjmakd.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163csbeurxm.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163xwgupnzx.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163skmgfxfv.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163unhjnsmy.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163cprrklvt.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163fmvhhaie.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163ntsixiui.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163cwblttid.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163orgnawdo.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163wzgkbnkw.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163vkjqugxo.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163pstdagdn.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163lmozbswa.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163tpskuxhc.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163wxruqijm.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163rgyxqshe.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163sljrpyad.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163fmvocxan.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163xlwymqbd.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163zinhtuny.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163zwopzduu.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163euhzuxgf.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163phiskbhh.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163fwsmgmcs.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163rpspzmda.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163ffygrfce.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163umnwbpbs.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163uyezqizw.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163mzlveebs.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163hmrhqdaj.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ejnwlire.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163acnzhagv.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163jazxpboj.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163fucmqnyo.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163kvfatwuu.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163tlyvjoip.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163rfncmeyx.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163nhcfwdoo.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163yhdagato.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163zjzltclr.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163fozcrodg.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163mmyrqhpm.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163jdngfqou.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163trthrwyq.html

[B07] while 循环
来源：http://www.sxryk.cn/163fmjrkwzy.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163gkilvzxk.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163cxldrobf.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163osapqmnj.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163lywnqezu.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163snejkwpn.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163mxmcxnpp.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163ynerdlby.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qkkapybd.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163bbdpdqcd.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163qzwyctrd.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ftquygkm.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bjtucbij.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vdmwogqo.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163advymtzo.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163qxqwrcxh.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163spnteqav.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163cdidwkaw.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163muiosyde.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163kpgacpyo.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163wsbyobfi.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163zgrwgrtz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ynpocsiu.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163tktujzil.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163rwjynmyo.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163vffcqjdk.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163vlcxzkkn.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163qvfaybyz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163ihmpipbt.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163mfihhxnz.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163ptpvljdg.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163ucbppwer.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163stjgnkfv.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163efjcfxvq.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163xadnbdlh.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163nathgznn.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ajaohejy.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163yncsescz.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163iznnwuyc.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163tbaacwqb.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163tnpeyggs.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163dfqebnjp.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163dbfmxlfk.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163whxatbio.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ggwfezzj.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163bnastinj.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163hwpwuhik.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163dbbsokpa.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163oaqmidqu.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163wuqajmak.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163kaohzcmr.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163qkwfwlkp.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163qqqnwxum.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163xoxivugz.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163kugmsxos.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163nsouvkld.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ewppjczw.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163foyvigsn.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163zauwjrpl.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163zjelawxn.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163zzvgflyg.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163jdkhmyud.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163dtcfwejk.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163kbgjrkhb.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163xiixwjxc.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163pbqohaoa.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163nlfczntn.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163obprknpu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163vjhuwsam.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163gtoxtmhi.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163owqgvhxq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163fkwtusku.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163tmvzyobc.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163qyjrycpu.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163hklussnk.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163fldygmrr.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163sjuqboil.html

Java: a && b || !c
来源：http://www.sxryk.cn/163sgkoeebg.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163ssztqjwm.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163shrontkl.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163ohiocroc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163nidzylcw.html

Py:   if not data: return
来源：http://www.xuanzx.com/163tvopvpjt.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163hwlwqedn.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163axodsedy.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163rioupeis.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163fgisivff.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163irayqmou.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163aoiwnivx.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163gugznblm.html

================================================================================
来源：http://www.sxryk.cn/163ikmgwrmb.html

C. 函数与作用域
来源：http://www.xuanzx.com/163tnwssfch.html

================================================================================
来源：http://www.xuanzx.com/163tkjiyyjo.html

[C01] 定义函数
来源：http://www.sxryk.cn/163exzyohgt.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163wvjcpkhh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hflfuike.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163anmfjxbl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163jolfddcm.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163hjvmqjty.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163jkyyhlac.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163cbsugmnv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163uosozguw.html

[C02] 默认参数
来源：http://www.xuanzx.com/163jsobputv.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163xmyjcpng.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163hmziywab.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163yrgepoio.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163kgpbxenp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163fvpquqeq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163wjjmotar.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163vppbtaxi.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163xgmefwmu.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163ouznnngv.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163hcwlihxf.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163pgogkkip.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163tiosxcey.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163hfpkcflg.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163qddinslg.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163lcdfaruz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163rtjjbzsm.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163kwitxxkg.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163qnmtdpmz.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163xaxravrk.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163qbacezoq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163jhtzuaka.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163fvavdbdv.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163mmqirrnr.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163wemypvxn.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163cphmtdgs.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163dpajiyib.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163vublykci.html

Py:   return a, b
来源：http://www.sxryk.cn/163xkcdunes.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163pluoknyz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163gjcfohdm.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163lmflxija.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163qkkmtfbw.html

Go:   return a, b
来源：http://www.sxryk.cn/163eglxffsw.html

Ruby: return a, b
来源：http://www.sxryk.cn/163emseqvcb.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163mstuzand.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163vrefrioe.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163srpxjmrl.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163xtkadokl.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163murruvbi.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163ccisvyhv.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163uvghtimf.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163vrqcvbjs.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163jnruefmr.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163hshleerw.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163vwtkplqe.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163liexteqc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163jsiqglfp.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163qiylezmj.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163tpchoznc.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163ebjadrkr.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163hdtgnmzz.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163cqosewey.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163unvrvssy.html

[C08] 闭包
来源：http://www.sxryk.cn/163kiipddkm.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163dghsdcjb.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163qjmhpqqq.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zyqlptue.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163twytfxqh.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163efyctmxu.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163dixkgtup.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163iadsogeh.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163artlmooc.html

[C09] 递归
来源：http://www.aibaodan.cn/163jlfinqbh.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163hjqfjtye.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163pmhqbuub.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163nmcikqmv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163aybhnkia.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163dnvhskee.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ivskdvux.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163xnxxnjbk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163vfrycgce.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163cdaowzzf.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163jsamtcsy.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163pxlmenvp.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163cemafrtr.html

TS:   同 JS
来源：http://www.aibaodan.cn/163zowmsjqq.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163aloftcau.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163mpjbqjcx.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163fhqvvhtj.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163mvoxhgqi.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163knzmwujm.html

Py:   from module import func
来源：http://www.sxryk.cn/163bleeahkp.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163mxitvkzj.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163yrubthqg.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163ahpdmpdr.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163noavplan.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163rsgmymtb.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163ivsmfhag.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163mpgwugvl.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163xpuhbycg.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163axccltjc.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163uzabwxzx.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163qzbpcbia.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ujwmzntj.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163odxgaeuo.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163ybjdyrec.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163bkzmpqfm.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163sybvrdsd.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163nakysmdj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163cxmnblvk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163yejpnxpv.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163hozxuyve.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163xgkaseej.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163vzcwgydz.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163tfaetfvx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ronahvwh.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163smmmftka.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163bhlzizex.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163njbfjmlb.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163mprladug.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163wvzbbpnd.html


<!-- 参考信息 -->